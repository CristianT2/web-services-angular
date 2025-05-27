import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  URL_API = 'https://recipe-book2.p.rapidapi.com/recipes-popular';
  URL_API2 = 'https://recipe-book2.p.rapidapi.com/recipe-details';
  API_KEY = '362d472279msh43ebf90773410d7p19b7ddjsn7ede4f6dd219';

  constructor(private httpClient: HttpClient) { }
  
  //Obtiene las recetas mas populares
  getPopularRecipes(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
		    'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      })
    }
    return this.httpClient.get(this.URL_API, options);
  }

  //Obtiene los detalles de cada receta
  getRecipeDetails(path: string): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'x-rapidapi-key': this.API_KEY,
		    'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      })
    }
    return this.httpClient.get(`${this.URL_API2}?path=${path}`, options);
  }
}
