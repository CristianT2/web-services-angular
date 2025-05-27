import { Component, OnInit } from '@angular/core';
import { PracticaService } from '../services/practica.service';

@Component({
  selector: 'app-practica',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent implements OnInit{

  recetas: any [] = [];
  detalles: any = null;

  constructor(private practicaService: PracticaService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
