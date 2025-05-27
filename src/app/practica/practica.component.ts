import { Component, OnInit } from '@angular/core';
import { PracticaService } from '../services/practica.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-practica',
  imports: [CommonModule, RouterModule],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent implements OnInit{

  recetas: any [] = [];
  detalles: any = null;

  constructor(private practicaService: PracticaService){}

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  public obtenerRecetas(): void {
    this.practicaService.getPopularRecipes().subscribe(
      (response: any) => {
        this.recetas = response;
        console.log(this.recetas);
      },
      (error: any) => {
        console.log("No se encontraron las recetas", error);
      }
    );
  }

  public obtenerDetalles(path: string): void{
    this.practicaService.getRecipeDetails(path).subscribe(
      (response: any) => {
        this.detalles = response;
        console.log(this.detalles);
      },
      (error: any) => {
        console.log("Error la obtener los detalles de la receta", error);
      }
    );
  }

  public volver(): void{
    this.detalles = null;
    //this.detalles = [];
  }
}
