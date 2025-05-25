import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private URL_API = 'https://rapidweather.p.rapidapi.com/data/2.5/weather';
  private API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }

  //Obtiene el clima por nombre de una ciudad
  public getWeatherByCity(city: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'rapidweather.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API}?q=${city}&units=metric&lang=es`, options);
  } 

  //Obtiene el clima por coordenadas geograficas
  public getWeatherByCoordenadas(latitud: string, longitud: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': 'rapidweather.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API}?lat=${latitud}&lon=${longitud}&units=metric&lang=es`, options);
  }
}
