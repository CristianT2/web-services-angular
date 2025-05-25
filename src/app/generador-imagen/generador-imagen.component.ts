import { Component } from '@angular/core';
import { GeneradorImagenService } from '../services/generador-imagen.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generador-imagen',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './generador-imagen.component.html',
  styleUrl: './generador-imagen.component.css'
})
export class GeneradorImagenComponent {

  tituloPosteo: string = '';
  descripcion: string = '';
  imagen: string | null = null;
  error: string | null = null;
  cargando: boolean = false;

  constructor(private generadorImagenService: GeneradorImagenService) { }


  //Se obtiene la imagen generada basada en el título del posteo
  async obtenerImagen() {
    this.cargando = true;
    this.error = null;
    this.imagen = null;

    try {
      this.imagen = await this.generadorImagenService.generateImage(this.tituloPosteo);
    } catch (err) {
      console.error(err);
      this.error = 'Error generando la imagen.';
    } finally {
      this.cargando = false;
    }
  }

  resetearFormulario() {
    this.tituloPosteo = '';
    this.descripcion = '';
    this.imagen = null;
    this.error = null;
  }
}
