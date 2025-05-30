import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorPostService {

  //Apilayer
  private URL_API = 'https://api.apilayer.com/currency_data';
  private API_KEY = 'rZSIYVeQu4lRkxkHfjmNSpcmZtdLbb6U';

  //RapidApi
  private URL_API2 = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';
  private API_KEY2 = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }


  //Obtener las diferente monedas
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

  //Convertir monedas
  public convertCurrencies(value: string, from: string, to: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY2,
        'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
    };

    //Media Type: Form_Data
    const body = new HttpParams()
    .set('from-value', value)
    .set('from-type', from)
    .set('to-type', to);

    return this.httpClient.post(this.URL_API2, body.toString(), options);
  }
}
