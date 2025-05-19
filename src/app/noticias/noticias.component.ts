import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{

  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //Se obtienen la noticias obtenidas de la api
  public obtenerNoticias(): void{
    this.noticiasService.getNoticias().subscribe(
      (response: any) => {
        this.noticias = response.homepageArticles[0].articles.slices(0,10);
      },
      (error: any) => {
        console.log("Error al obtener las noticias", error);
      }
    )
  }
}
