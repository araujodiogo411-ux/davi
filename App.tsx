import React, { useState, useRef } from 'react';
import { Book as BookIcon, Download, Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { textbookContent } from './data/content';
import { PDFPages } from './components/PDFPages';
import { generateIllustration } from './services/gemini';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [progress, setProgress] = useState(0);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const startGeneration = async () => {
    setAppState(AppState.GENERATING_IMAGES);
    setProgress(0);
    const newImages: Record<string, string> = {};
    
    try {
      // 1. Generate Cover Image
      const coverPrompt = "Capa de livro didático de geografia, moderna, vetorial flat design, mostrando conexão global, indústria e cidade, cores azul e roxo predominantes, limpo.";
      const coverUrl = await generateIllustration(coverPrompt, true);
      newImages['cover'] = coverUrl;
      setGeneratedImages(prev => ({ ...prev, cover: coverUrl }));
      setProgress(10); 

      // 2. Generate Chapter Images (8 chapters now)
      const totalChapters = textbookContent.chapters.length;
      const progressPerChapter = 90 / totalChapters;

      for (let i = 0; i < totalChapters; i++) {
        const chapter = textbookContent.chapters[i];
        if (chapter.illustrationPrompt) {
          const url = await generateIllustration(chapter.illustrationPrompt, false);
          newImages[chapter.id] = url;
          setGeneratedImages(prev => ({ ...prev, [chapter.id]: url }));
        }
        setProgress(10 + ((i + 1) * progressPerChapter));
      }

      setAppState(AppState.READY_TO_DOWNLOAD);

    } catch (error) {
      console.error("Generation failed", error);
      setAppState(AppState.ERROR);
    }
  };

  const downloadPDF = async () => {
    if (!pdfContainerRef.current) return;
    setAppState(AppState.DOWNLOADING);

    // Give a moment for any last react renders
    await new Promise(resolve => setTimeout(resolve, 500));

    const doc = new jsPDF('p', 'pt', 'a4'); // Use 'pt' for points to match pixel mapping closer
    const elements = pdfContainerRef.current.querySelectorAll('.pdf-page');

    // Create a temporary container for capturing
    // This solves the "buggy PDF" issue by isolating the element from the horizontal scroll view
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '-10000px';
    tempContainer.style.left = '-10000px';
    // Ensure the temp container allows the content to exist in its full width
    tempContainer.style.width = 'auto'; 
    tempContainer.style.height = 'auto';
    document.body.appendChild(tempContainer);

    for (let i = 0; i < elements.length; i++) {
      const originalElement = elements[i] as HTMLElement;
      
      // Clone the node to render it in a clean state
      const clonedElement = originalElement.cloneNode(true) as HTMLElement;
      
      // Ensure the clone has the exact A4 pixel dimensions enforced
      clonedElement.style.width = '794px';
      clonedElement.style.height = '1123px';
      clonedElement.style.transform = 'none';
      clonedElement.style.margin = '0';
      
      tempContainer.appendChild(clonedElement);

      // Capture the clone
      const canvas = await html2canvas(clonedElement, {
        scale: 2, // High resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
        windowWidth: 1200, // Ensure no responsive breakpoints trigger
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // A4 size in points: 595.28 x 841.89
      const pdfWidth = 595.28;
      const pdfHeight = 841.89;

      if (i > 0) {
        doc.addPage();
      }
      doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      // Clean up clone
      tempContainer.removeChild(clonedElement);
    }

    // Clean up temp container
    document.body.removeChild(tempContainer);

    doc.save('Geografia-SAE-Digital-Style.pdf');
    setAppState(AppState.READY_TO_DOWNLOAD);
  };

  const hasApiKey = !!process.env.API_KEY;

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col font-body">
      <header className="bg-[#632B90] text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookIcon className="h-6 w-6" />
            <h1 className="text-xl font-bold font-header">GeoBook Creator <span className="text-sm font-normal opacity-75">| SAE Style</span></h1>
          </div>
          <div className="flex items-center gap-4">
             {!hasApiKey && (
               <div className="flex items-center gap-2 bg-red-500 px-3 py-1 rounded text-sm font-bold">
                 <AlertTriangle size={16} />
                 <span>Falta API Key</span>
               </div>
             )}
            {appState === AppState.IDLE && (
              <button 
                onClick={startGeneration}
                disabled={!hasApiKey}
                className="flex items-center gap-2 bg-[#FFCD00] hover:bg-yellow-400 text-[#632B90] px-6 py-2 rounded-full font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Sparkles size={18} />
                Gerar Livro
              </button>
            )}
            {appState === AppState.GENERATING_IMAGES && (
              <div className="flex items-center gap-2 bg-[#4A148C] px-4 py-2 rounded-full">
                <Loader2 className="animate-spin" size={18} />
                <span>Gerando: {Math.round(progress)}%</span>
              </div>
            )}
            {(appState === AppState.READY_TO_DOWNLOAD || appState === AppState.DOWNLOADING) && (
              <button 
                onClick={downloadPDF}
                disabled={appState === AppState.DOWNLOADING}
                className="flex items-center gap-2 bg-[#009FE3] hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition-colors shadow-md"
              >
                {appState === AppState.DOWNLOADING ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <Download size={18} />
                )}
                {appState === AppState.DOWNLOADING ? "Renderizando..." : "Baixar PDF"}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow p-8 overflow-auto bg-gray-300">
        
        {appState === AppState.IDLE && (
           <div className="max-w-4xl mx-auto text-center mt-10">
             <div className="bg-white p-12 rounded-2xl shadow-xl border-t-8 border-[#009FE3]">
               <h2 className="text-4xl font-black font-header text-[#632B90] mb-4">Criador de Material Didático</h2>
               <p className="text-gray-600 mb-8 text-lg">
                 Este sistema gera um capítulo completo de Geografia no estilo visual da <strong>SAE Digital</strong>.
               </p>
               <div className="grid grid-cols-3 gap-4 text-left">
                  <div className="bg-[#F3E5F5] p-4 rounded-lg">
                    <h3 className="text-[#632B90] font-bold">1. Conteúdo Rico</h3>
                    <p className="text-sm text-gray-600">Textos explicativos e seções de curiosidade.</p>
                  </div>
                  <div className="bg-[#E1F5FE] p-4 rounded-lg">
                    <h3 className="text-[#009FE3] font-bold">2. Design Premium</h3>
                    <p className="text-sm text-gray-600">Layout profissional idêntico ao material oficial.</p>
                  </div>
                   <div className="bg-[#FFF8E1] p-4 rounded-lg">
                    <h3 className="text-yellow-700 font-bold">3. Interatividade</h3>
                    <p className="text-sm text-gray-600">QR Codes e atividades práticas integradas.</p>
                  </div>
               </div>
             </div>
           </div>
        )}

        <div className={`${appState === AppState.IDLE ? 'hidden' : 'block'}`}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-600 font-header">Pré-visualização do Documento</h2>
          </div>
          
          <div className="flex justify-center overflow-x-auto pb-10">
            <PDFPages 
              bookData={textbookContent} 
              generatedImages={generatedImages} 
              containerRef={pdfContainerRef}
            />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;