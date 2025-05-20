import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasAutosService {

  private URL_API = 'https://car-specs.p.rapidapi.com/v2/cars/makes';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }

  //Se obtienen la marcas de autos
  public getMarcasAutos(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'car-specs.p.rapidapi.com'
      })
    }
    return this.httpClient.get(this.URL_API, options);
  }

  //Se obtienen todos los modelos de una marca por su id
  public getModelsByMake(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'car-specs.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API}/${id}/models`, options);
  }
}
