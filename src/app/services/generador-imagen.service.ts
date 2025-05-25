import { Injectable } from '@angular/core';
import { GoogleGenAI, Modality } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeneradorImagenService {
  
  private API_KEY = 'AIzaSyBpa5DNZAMjK3x26c3BcXsgEgOnNzKDD_8';

  private genAI: GoogleGenAI;

  constructor(){
    this.genAI = new GoogleGenAI({ apiKey: this.API_KEY });
  }

  // Se genera una imagen basada en el prompt proporcionado
  async generateImage(prompt: string): Promise<string> {
    const response = await this.genAI.models.generateContent({
      model: 'gemini-2.0-flash-preview-image-generation',
      contents: prompt,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;

    if (!parts) throw new Error('No response from Gemini API');

    for (const part of parts) {
      if (part.inlineData?.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error('No image found in response');
  }
}
