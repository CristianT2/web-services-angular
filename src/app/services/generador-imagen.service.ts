import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorImagenService {

  private URL_API = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent';
  private API_KEY = 'AIzaSyBpa5DNZAMjK3x26c3BcXsgEgOnNzKDD_8';

  constructor(private httpClient: HttpClient) { }

  //Genera una Imagen basada en el prompt proporcionado
  public generateImage(prompt: string): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const body = {
      contents: [
        {
          parts: [
            { text: `Genera una imagen basada en: ${prompt}` }
          ]
        }
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE']
      }
    }
    return this.httpClient.post(`${this.URL_API}?key=${this.API_KEY}`, body, options);
  }
}
