import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private URL_API = 'https://livescore6.p.rapidapi.com/news/v2/list';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }

  //Obtiene las noticias 
  public getNoticias(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
        'x-rapidapi-key': this.API_KEY,
      })
    }
    return this.httpClient.get(this.URL_API, options);
  }
}
