import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  private URL_API = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';
  //private API_KEY = '542a6f97abmshae822022d129793p13a974jsn0ebb121bb906';

  constructor(private httpClient: HttpClient) { }

  public getLanguages(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API}/languages`, options);
  }

  public translateWords(query: string, source: string, target: string): Observable<any> {
    const headers = new HttpHeaders({
    'x-rapidapi-key': this.API_KEY,
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
    'Content-Type': 'application/json'
  });

  // Media Type : Json
  const body = {
    q: query,
    source: source,
    target: target
  };
    return this.httpClient.post(this.URL_API, body, {headers});
  }
}
