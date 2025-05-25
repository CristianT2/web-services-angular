import { Component } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  imports: [],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent {

  ciudad: string = '';
  latitud: string = '';
  longitud: string = '';
  clima: any = null;

  constructor(private climaService: ClimaService){}

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
}
