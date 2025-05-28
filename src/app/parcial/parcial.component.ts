import { Component, OnInit } from '@angular/core';
import { ParcialService } from '../services/parcial.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './parcial.component.html',
  styleUrl: './parcial.component.css'
})
export class ParcialComponent{

  anio: string = '';
  carreras: any[] = [];
  pilotos: any [] = [];
  constructores: any[] = [];

  constructor(private parcialService: ParcialService){}

 

  obtenerCarreras(): void{
    this.parcialService.getInformacion(this.anio).subscribe(
      (response: any) => {
        this.carreras = response.results;
        console.log(this.carreras);
      },
      (error: any) => {
        console.log("Error al obtener las carreras", error);
      }
    )
  }

  obtenerPilotos(id: string): void{
    this.parcialService.getPilotos(id).subscribe(
      (response: any) => {
        this.pilotos = response.results.drivers;
        console.log(this.pilotos);
      },
      (error: any) => {
        console.log("Error al obtener las pilotos", error);
      }
    )
  }

  obtenerConstructores(id: string): void{
    this.parcialService.getConstructors(id).subscribe(
      (response: any) => {
        this.constructores = response.results;
        console.log(this.constructores);
      },
      (error: any) => {
        console.log("Error al obtener las pilotos", error);
      }
    )
  }

  salir(): void{
    this.carreras = [];
    this.pilotos = [];
  }

  cerrar(): void {
    this.constructores = [];
  }
}
