import { Component, OnInit } from '@angular/core';
import { MarcasAutosService } from '../services/marcas-autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcas-autos',
  imports: [CommonModule],
  templateUrl: './marcas-autos.component.html',
  styleUrl: './marcas-autos.component.css'
})
export class MarcasAutosComponent implements OnInit{

  marcas: any[] = [];
  modelos: any[] = [];
  modalActivo: boolean = false;

  constructor(private marcasAutosService: MarcasAutosService) {}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  //obtenemos las marcas de autos
  obtenerMarcas(): void {
    this.marcasAutosService.getMarcasAutos().subscribe(
      (response: any) => {
        this.marcas = response;
        console.log(this.marcas);
      },
      (error: any) => {
        console.log("Error al obtener las marcas", error);
      }
    )
  }

  //Se obtienen los modelos de cada marca por si id
  obtenerModelosPorIdMarca(id: number): void {
    this.marcasAutosService.getModelsByMake(id).subscribe(
      (response: any) => {
        this.modelos = response;
        console.log(this.modelos);
      },
      (error: any) => {
        console.log("Error al obtener los modelos", error);
      }
    )
  } 
}
