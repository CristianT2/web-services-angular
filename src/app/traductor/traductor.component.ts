import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TraductorService } from '../services/traductor.service';

@Component({
  selector: 'app-traductor',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent implements OnInit{

  lenguajes: {language: string, name: string}[] = [];
  texto: string = '';
  idioma: string = '';
  idiomaATraducir: string = '';
  textoTraducido: string = ''; 

  constructor(private traductorService: TraductorService){}

  ngOnInit(): void {
    this.obtenerLenguajes();
  }

  public obtenerLenguajes(): void{
    this.traductorService.getLanguages().subscribe(
      (response: any) => {
        this.lenguajes = response.languages;
        console.log(this.lenguajes);
      },
      (error: any) => {
        console.log("Error al obtener los lenguajes", error);
      }
    )
  }

  public traducir(): void{
    this.traductorService.translateWords(this.texto, this.idioma, this.idiomaATraducir).subscribe(
      (response: any) => {
        this.textoTraducido = response.data.translations.translatedText[0];
        console.log(this.textoTraducido);
      },
      (error: any) => {
        console.log("Error al hacer la traduccion", error);
      }
    )
  }

  public borrar(): void{
    this.texto = '';
    this.textoTraducido = '';
  }
}
