import React from 'react';
import { BookData } from '../types';
import { Lightbulb, Globe, ExternalLink, PenTool } from 'lucide-react';

interface PDFPagesProps {
  bookData: BookData;
  generatedImages: Record<string, string>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const PDFPages: React.FC<PDFPagesProps> = ({ bookData, generatedImages, containerRef }) => {
  
  const getQrUrl = (data: string) => `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;

  return (
    <div ref={containerRef} className="print-exact">
      
      {/* 
        =============================================
        CAPA (COVER PAGE)
        =============================================
      */}
      <div className="pdf-page relative flex flex-col items-center bg-white">
        
        {/* Top Logo Area */}
        <div className="mt-16 mb-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[25px] border-t-[#632B90] border-r-[15px] border-r-transparent transform -rotate-90"></div>
             <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[25px] border-t-[#FFCD00] border-r-[15px] border-r-transparent transform rotate-180 -ml-4"></div>
             <div className="flex flex-col leading-none ml-2">
                <span className="text-[#632B90] font-black text-4xl tracking-tight">sae</span>
                <span className="text-[#632B90] text-sm tracking-[0.2em] font-bold">DIGITAL</span>
             </div>
          </div>
        </div>

        {/* Subject Line */}
        <div className="w-full flex justify-center items-center mb-2">
           <div className="h-[2px] bg-[#632B90] w-24"></div>
           <h2 className="mx-4 text-[#632B90] font-bold uppercase tracking-wider text-sm font-header">{bookData.subtitle}</h2>
           <div className="h-[2px] bg-[#632B90] w-24"></div>
        </div>

        {/* Main Title */}
        <h1 className="text-[#009FE3] font-black text-5xl uppercase font-header tracking-tight mb-2 text-center px-8">
          {bookData.title}
        </h1>
        <p className="text-gray-500 text-lg mb-12 font-body text-center">Uma análise geográfica moderna</p>

        {/* Illustration Blob */}
        <div className="relative w-full flex-grow flex justify-center items-start">
           <div className="absolute top-0 w-[500px] h-[500px] bg-[#E0F7FA] rounded-full filter blur-3xl opacity-50 z-0"></div>
           <div className="z-10 w-[80%] max-h-[400px] object-contain">
              {generatedImages['cover'] ? (
                <img src={generatedImages['cover']} alt="Cover" className="w-full h-auto drop-shadow-xl" />
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">Gerando Capa...</div>
              )}
           </div>
        </div>

        {/* Yellow Ribbon */}
        <div className="absolute right-0 top-[60%] bg-[#FFCD00] py-3 pl-8 pr-12 rounded-l-full shadow-md z-20">
           <span className="text-[#632B90] font-bold font-header text-lg tracking-wide">{bookData.grade}</span>
        </div>

        {/* Footer */}
        <div className="w-full mt-auto p-8 flex justify-between items-end">
           <div className="flex gap-2 items-center bg-[#F0F0F0] p-2 rounded-lg pr-6">
              <img src={getQrUrl(bookData.publisherUrl)} className="w-16 h-16" alt="QR" />
              <div className="flex flex-col">
                 <span className="text-[#009FE3] font-bold text-xs uppercase">Portal Digital</span>
                 <span className="text-gray-500 text-[10px]">Aponte a câmera<br/>para acessar</span>
              </div>
           </div>

           <div className="text-right">
              <p className="text-[#632B90] font-bold text-xs uppercase tracking-wider">Material Didático Interativo</p>
              <p className="text-gray-400 text-[10px]">© 2024 SAE Digital S/A. Curitiba - PR.</p>
           </div>
        </div>
      </div>

      {/* 
        =============================================
        SUMÁRIO (TOC)
        =============================================
      */}
      <div className="pdf-page bg-white p-12 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF4E0] rounded-bl-full"></div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
           <div className="w-2 h-12 bg-[#FFCD00]"></div>
           <h2 className="text-[#009FE3] font-black text-5xl font-header">Sumário</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
           {bookData.chapters.map((chapter, idx) => (
             <div key={idx} className="flex items-start gap-4">
                <span className="text-gray-200 font-black text-4xl font-header -mt-1 w-12 text-right">0{idx + 1}</span>
                <div className="flex-grow border-b border-gray-100 pb-2">
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-[#009FE3] font-bold text-sm font-header uppercase">{chapter.title}</h3>
                      <span className="text-[#632B90] font-bold text-sm">pág. {idx + 3}</span>
                   </div>
                   <p className="text-gray-400 text-[10px] font-body leading-tight truncate">
                      {chapter.sections[0].content.substring(0, 100)}...
                   </p>
                </div>
             </div>
           ))}
        </div>

        <div className="absolute bottom-12 left-12 right-12 bg-[#F8F9FA] rounded-xl p-4 border border-gray-100 flex items-start gap-4">
           <div className="bg-[#009FE3] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shrink-0">!</div>
           <div>
              <h4 className="text-[#632B90] font-bold mb-1 font-header text-sm">Como usar este material</h4>
              <p className="text-gray-500 text-xs font-body">Utilize os QR Codes nas páginas para acessar vídeos e conteúdos extras. Complete as seções "Colocar em Prática".</p>
           </div>
        </div>
      </div>

      {/* 
        =============================================
        CHAPTER PAGES
        =============================================
      */}
      {bookData.chapters.map((chapter, idx) => (
        <div key={chapter.id} className="pdf-page bg-white px-8 py-8 block relative overflow-hidden">
          
          {/* Header */}
          <div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-4">
             <div className="flex items-baseline gap-2">
                <span className="text-[#009FE3] font-black text-3xl font-header">{idx + 1}.</span>
                <h2 className="text-[#009FE3] font-black text-2xl font-header uppercase">{chapter.title}</h2>
             </div>
             <span className="text-[#632B90] uppercase font-bold text-[10px] tracking-wider bg-[#F3E5F5] px-2 py-1 rounded mb-1">
                {bookData.subtitle}
             </span>
          </div>

          {/* 
              MAIN CONTENT CONTAINER
              Using Floats to allow text wrapping 
          */}
          <div className="relative h-[955px]"> {/* Slightly increased height to fill page more */}
            
            {/* 
                RIGHT COLUMN (FLOATED)
                Contains Image, QR, and Activity Box
            */}
            <div className="float-right w-[40%] ml-6 mb-6 flex flex-col gap-3 clear-right">
               
               {/* Image */}
               <div className="w-full bg-white border border-gray-200 p-1 shadow-sm rounded-lg">
                  {generatedImages[chapter.id] ? (
                    <img src={generatedImages[chapter.id]} alt="Chapter" className="w-full h-auto rounded max-h-[150px] object-cover" />
                  ) : (
                    <div className="w-full h-[150px] bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Imagem...</div>
                  )}
               </div>

               {/* Conecte-se Box */}
               {chapter.sections[0].qrCodeLink && (
                  <div className="bg-[#E3F2FD] p-2 rounded-lg flex flex-col items-center text-center border border-[#BBDEFB]">
                     <img src={getQrUrl(chapter.sections[0].qrCodeLink)} className="w-14 h-14 mb-1 mix-blend-multiply" alt="QR" />
                     <div className="flex items-center gap-1 text-[#0277BD] font-bold text-[10px] mb-0.5">
                        <ExternalLink size={10} />
                        <span>CONECTE-SE</span>
                     </div>
                     <p className="text-gray-600 text-[8px] leading-tight px-1">{chapter.sections[0].qrCodeLabel}</p>
                  </div>
               )}

               {/* 
                  ACTIVITY SECTION (Floated Right)
               */}
               {chapter.activities && (
                 <div className="bg-white border border-[#009FE3] rounded-lg overflow-hidden flex flex-col shadow-md w-full">
                    <div className="bg-[#009FE3] text-white py-1 px-3 flex items-center gap-2">
                       <PenTool size={12} />
                       <span className="font-bold font-header uppercase text-[10px]">Colocar em Prática</span>
                    </div>

                    <div className="p-2 space-y-2">
                       {chapter.activities.map((act, i) => (
                         <div key={i}>
                            <div className="flex items-start gap-2 mb-1">
                               <div className="bg-[#632B90] text-white w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5">
                                  {i + 1}
                               </div>
                               <p className="font-bold text-gray-800 text-[9px] leading-tight text-justify">{act.text}</p>
                            </div>
                            
                            {/* Multiple Choice Options */}
                            {act.type === 'multiple-choice' && act.options && (
                               <div className="grid grid-cols-1 gap-1 pl-5 mt-1">
                                  {act.options.map((opt, optIdx) => (
                                    <div key={optIdx} className="flex items-center gap-1.5 border border-gray-100 p-0.5 rounded bg-gray-50">
                                       <div className="w-2 h-2 border border-gray-400 bg-white rounded flex-shrink-0"></div>
                                       <span className="text-[8px] text-gray-600 leading-tight">{opt}</span>
                                    </div>
                                  ))}
                               </div>
                            )}

                            {/* Open Ended Lines (Taller now) */}
                            {act.type === 'open-ended' && act.lines && (
                               <div className="pl-5 space-y-1.5 mt-1">
                                  {Array.from({ length: act.lines }).map((_, l) => (
                                    <div key={l} className="w-full border-b border-gray-300 h-2.5"></div>
                                  ))}
                               </div>
                            )}
                         </div>
                       ))}
                    </div>
                 </div>
               )}
            </div>

            {/* 
                TEXT CONTENT (Flows around the floated element)
            */}
            <div className="text-justify text-gray-800 font-body text-[11.5px] leading-[1.4]">
               
               {/* First Section */}
               <h3 className="text-[#009FE3] font-bold text-base mb-1 font-header mt-0">{chapter.sections[0].title}</h3>
               {chapter.sections[0].content.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-2 indent-4">{p}</p>
               ))}

               {/* Observação Box */}
               {chapter.sections[0].note && (
                 <div className="bg-[#FFF9C4] p-2 rounded-lg mb-3 border-l-4 border-[#FFCD00] shadow-sm my-2 break-inside-avoid">
                    <div className="flex items-center gap-2 mb-1 text-[#632B90] font-bold text-[10px] uppercase">
                       <Lightbulb size={12} />
                       <span>Observação</span>
                    </div>
                    <p className="text-gray-800 text-[10px] italic font-body leading-tight">
                       {chapter.sections[0].note}
                    </p>
                 </div>
               )}

               {/* Second Section */}
               {chapter.sections[1] && (
                  <div className="mt-2">
                    <h3 className="text-[#009FE3] font-bold text-base mb-1 font-header">{chapter.sections[1].title}</h3>
                    {chapter.sections[1].content.split('\n\n').map((p, i) => (
                          <p key={i} className="mb-2 indent-4">{p}</p>
                    ))}
                  </div>
               )}
            </div>
            
            <div className="clear-both"></div>

          </div>

          {/* Footer Page Number */}
          <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-gray-100 flex items-center justify-between px-10 bg-gradient-to-t from-gray-50 to-white z-20">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#009FE3]"></div>
                <span className="text-[#632B90] font-bold text-[10px] uppercase tracking-widest">SAE DIGITAL</span>
             </div>
             
             {/* Styled Page Number Circle */}
             <div className="relative">
                <div className="w-12 h-12 bg-[#009FE3] rounded-full flex items-center justify-center shadow-lg transform translate-y-4 border-4 border-white">
                    <span className="text-white font-bold text-lg font-header">{idx + 3}</span>
                </div>
             </div>
          </div>

        </div>
      ))}

      {/* 
        =============================================
        RESUMO (SUMMARY PAGE)
        =============================================
      */}
      <div className="pdf-page bg-[#00C2E0] relative flex items-center justify-center">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-[#009FE3] opacity-20 rounded-full"></div>
         </div>

         <div className="bg-white rounded-3xl p-12 max-w-4xl shadow-2xl relative z-10 w-[80%]">
            <h2 className="text-[#632B90] font-black text-3xl text-center mb-4 font-header">Resumo do Aprendizado</h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto text-sm">
               Neste volume sobre <strong className="text-[#632B90] uppercase">{bookData.title}</strong>, consolidamos conhecimentos essenciais.
            </p>

            <div className="grid grid-cols-2 gap-6">
               <div className="bg-[#F8F9FA] p-4 rounded-xl flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">🏭</span>
                  <h3 className="text-[#009FE3] font-bold text-xs uppercase">Indústria 4.0</h3>
               </div>
               <div className="bg-[#F8F9FA] p-4 rounded-xl flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">🏙️</span>
                  <h3 className="text-[#009FE3] font-bold text-xs uppercase">Urbanização</h3>
               </div>
               <div className="bg-[#F8F9FA] p-4 rounded-xl flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">🚜</span>
                  <h3 className="text-[#009FE3] font-bold text-xs uppercase">Agroindústria</h3>
               </div>
               <div className="bg-[#F8F9FA] p-4 rounded-xl flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">♻️</span>
                  <h3 className="text-[#009FE3] font-bold text-xs uppercase">Sustentabilidade</h3>
               </div>
            </div>
         </div>

         <div className="absolute bottom-10 text-center text-white/80 text-xs">
            <p className="font-bold">BioLearn</p>
            <p className="mt-2 opacity-50">www.sae.digital</p>
         </div>
         
         <div className="absolute bottom-0 right-10 transform translate-y-1/2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#00C2E0]">
                <span className="text-[#009FE3] font-bold text-xl">11</span>
            </div>
         </div>
      </div>

    </div>
  );
};