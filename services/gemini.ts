import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const getAiClient = () => {
  if (!API_KEY) {
    throw new Error("API Key not found in environment variables.");
  }
  return new GoogleGenAI({ apiKey: API_KEY });
};

export const generateIllustration = async (prompt: string, isCover: boolean = false): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Adjusted prompt for 2D / Vector style suitable for 6th grade
    const styleGuide = isCover 
      ? "Ilustração de capa de livro didático de geografia, alta qualidade. Estilo: Vetorial 2D, Flat Design, cores vibrantes e modernas, sem poluição visual. Personagens: Adolescentes diversos (11-12 anos) estudando felizes."
      : "Ilustração didática para livro escolar. Estilo: Vetorial 2D plano (Flat Design), limpo, educativo, cores harmoniosas, fácil compreensão, sem texto na imagem.";

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: `Generate an image based on this description. ${styleGuide} Subject: ${prompt}`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
    // Fallback to a clean placeholder
    return `https://placehold.co/800x450/EEE/31343C?text=Imagem+Indisponivel`;
  }
};