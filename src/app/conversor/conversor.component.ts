import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-conversor',
  imports: [],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent implements OnInit{

  monedas: any[] = [];
  monto: string = '';
  monedaSeleccionada: string = '';
  monedaAConvertir: string = '';
  resultado: string = '';


  constructor(private conversorService: ConversorService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //Obtiene todas las monedas
  obtenerMonedas(): void{
    this.conversorService.getCurrencies().subscribe(
      (response: any) => {
        this.monedas = Object.entries(response.symbols).map(([codigo, nombre ]) => ({ codigo, nombre }));
        console.log(this.monedas);
      },
      (error: any) => {
        console.log("Error al obtener las monedas", error);
      }
    )
  }

  //Obtiene el valor de conversion de una moneda a otra
  convertirMoneda(): void{
    this.conversorService.getConvert(this.monto, this.monedaSeleccionada, this.monedaAConvertir).subscribe(
      (respose: any) =>{
        this.resultado = respose.result.toFixed(2);
        console.log(this.resultado);
      },
      (error: any) =>{
        console.log("Error al obtener el resultado", error);
      }
    )
  }
}
