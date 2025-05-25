import { Component } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima',
  imports: [CommonModule, FormsModule],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent {

  ciudad: string = '';
  latitud: string = '';
  longitud: string = '';
  clima: any = null;

  ciudadIngresada: boolean = false;
  latitudIngresada: boolean = false;
  longitudIngresada: boolean = false;

  constructor(private climaService: ClimaService) { }

  //Obtiene el clima por nombre de ciudad
  obtenerClimaPorCiudad(): void {
    this.climaService.getWeatherByCity(this.ciudad).subscribe(
      (response: any) => {
        this.clima = response;
        console.log(this.clima);
      },
      (error: any) => {
        console.log("Error al obtener los datos del clima", error);
      }
    )
  }

  //Obtiene el clima por coordenada geograficas
  obtenerClimaPorCoordenadas(): void {
    this.climaService.getWeatherByCoordenadas(this.latitud, this.longitud).subscribe(
      (response: any) => {
        this.clima = response;
        console.log(this.clima);
      },
      (error: any) => {
        console.log("Error al obtener los datos del clima", error);
      }
    )
  }

  onSubmit(): void {
    if (this.ciudad) {
      this.obtenerClimaPorCiudad();
    } else if (this.latitud && this.longitud) {
      this.obtenerClimaPorCoordenadas();
    } else {
      alert('Por favor, ingrese una ciudad o coordenadas válidas');
    }
  }

  onCiudadChange(value: string): void {
    this.ciudadIngresada = !!value;
    if (this.ciudadIngresada) {
      this.latitud = '';
      this.longitud = '';
      this.latitudIngresada = false;
      this.longitudIngresada = false;
    }
  }

  onLatLonChange(): void {
    this.latitudIngresada = !!this.latitud;
    this.longitudIngresada = !!this.longitud;

    if (this.latitudIngresada || this.longitudIngresada) {
      this.ciudad = '';
      this.ciudadIngresada = false;
    }
  }

}
