import { Component, OnInit } from '@angular/core';
import { ConversorPostService } from '../services/conversor-post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-post',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './conversor-post.component.html',
  styleUrl: './conversor-post.component.css'
})
export class ConversorPostComponent implements OnInit{

  public monedas: [string, string][] = [];
  //monedas: any[] = [];
  //monedas: { [key: string]: string } = {};
  //monedas: Record<string, string> = {};
  valor: string = '';
  from: string = '';
  to: string = '';
  resultado: number | null = null;
  error: string | null = null;

  constructor(private conversorService: ConversorPostService ){}

  ngOnInit(): void {
    this.obtenerMonedas();
  }

  public obtenerMonedas(): void{
    this.conversorService.getCurrencies().subscribe(
      (response: any) => {
        console.log(response)
        this.monedas = Object.entries(response.currencies);
        console.log(this.monedas);
      },
      (error: any) => {
        console.log("Error al obtener las monedas", error);
      }
    )
  }

  public convertirDivisa(): void{
    this.conversorService.convertCurrencies(this.valor, this.from, this.to).subscribe(
      (response: any) => {
        this.resultado = response.result;
        console.log(this.resultado);
      },
      (error: any) => {
        console.log("Error al convertir las monedas", error);
      }
    )
  }
}
