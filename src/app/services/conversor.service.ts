import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private URL_API = 'https://api.apilayer.com/currency_data';
  private API_KEY = 'tucXORnU83W356th0VYA04CVd8Qe8Dxg';

  constructor(private httpClient: HttpClient) { }

  //obtiene todos las monedas disponibles
  public getCurrencies(): Observable<any> {
    const options = {
      method: 'GET',
      redirect: 'follow',
      headers: new HttpHeaders({
        'apikey': this.API_KEY
      })
    }
    return this.httpClient.get(`${this.URL_API}/list`, options);
  }

  //obtiene el resultado de la conversion de ambas monedas
  public getConvert(amount: string, from: string, to: string): Observable<any> {
    const options = {
      method: 'GET',
      redirect: 'follow',
      headers: new HttpHeaders({
        'apikey': this.API_KEY
      })
    }
    return this.httpClient.get(`${this.URL_API}/convert?to=${to}&from=${from}&amount=${amount}`, options);
  }
}
