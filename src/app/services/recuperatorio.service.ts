import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperatorioService {


  private URL_API = 'https://local-business-data.p.rapidapi.com/search';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';
  private URL_API2 = 'https://local-business-data.p.rapidapi.com/business-details';
  //private API_KEY = '542a6f97abmshae822022d129793p13a974jsn0ebb121bb906';


  constructor(private httpClient: HttpClient) { }

  public getLugares(query: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'local-business-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    const body = {

      'queries': [
        query
      ],
      'limit': 10,
      'region': 'ar',
      'language': 'es',

    }
    return this.httpClient.post(this.URL_API, body, options);
  }

  public getFotos(id: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'local-business-data.p.rapidapi.com',
      })
    }
    return this.httpClient.get(`${this.URL_API2}?business_id=${id}`, options);
  }
}
