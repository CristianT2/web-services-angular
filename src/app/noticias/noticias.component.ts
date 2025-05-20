import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{

  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService){}

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  //Se obtienen la noticias obtenidas de la api
  public obtenerNoticias(): void{
    this.noticiasService.getNoticias().subscribe(
      (response: any) => {
        this.noticias = response.homepageArticles?.[0]?.articles.slice(0, 12);
      },
      (error: any) => {
        console.log("Error al obtener las noticias", error);
      }
    )
  }
}
