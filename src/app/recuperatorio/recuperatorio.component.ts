import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecuperatorioService } from '../services/recuperatorio.service';

@Component({
  selector: 'app-recuperatorio',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './recuperatorio.component.html',
  styleUrl: './recuperatorio.component.css'
})
export class RecuperatorioComponent{

  query: string = "";
  informacion: any[] = [];
  detalles: any[] = [];
  objeto: any = null;
  valor: string = '';
  otroValor: string = '';
  resultado: string | null = null;
  error: string | null = null;

  constructor(private recuperatorioService: RecuperatorioService){}


  obtenerInformacion(): void{
    this.recuperatorioService.getLugares(this.query).subscribe(
      (response: any) => {
        this.informacion = response.data;
        console.log(this.informacion);
      },
      (error: any) => {
        console.log("Error al obtener ", error);
      }
    )
  }

  obtenerFotos(id: string ): void{
    this.recuperatorioService.getFotos(id).subscribe(
      (response: any) => {
        this.detalles = response.data[0].photos_sample;
        console.log(this.detalles);
      },
      (error: any) => {
        console.log("Error al obtener ", error);
      }
    )
  }

  salir(): void{
    this.detalles = [];
  }

  cerrar(): void{
    
  }
}
