import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcialService {

  private URL_API = 'https://f1-live-motorsport-data.p.rapidapi.com/races';
  private URL_API2 = 'https://f1-live-motorsport-data.p.rapidapi.com/session';
  private URL_API3 = 'https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';
  //private API_KEY = '542a6f97abmshae822022d129793p13a974jsn0ebb121bb906';

  constructor(private httpClient: HttpClient) { }


  public getInformacion(año: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
		    'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API}/${año}`, options);
  } 

  public getPilotos(id: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
		    'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API2}/${id}`, options);
  }

  public getConstructors(anio: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
		    'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API3}/${anio}`, options);
  }
}
