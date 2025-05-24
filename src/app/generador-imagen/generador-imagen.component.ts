import { Component, OnInit } from '@angular/core';
import { GeneradorImagenService } from '../services/generador-imagen.service';

@Component({
  selector: 'app-generador-imagen',
  imports: [],
  templateUrl: './generador-imagen.component.html',
  styleUrl: './generador-imagen.component.css'
})
export class GeneradorImagenComponent implements OnInit{

  tituloPosteo: string = '';
  contenidoPosteo: string = '';
  imagen: any = '';
  error: string = '';
  cargando: boolean = false;

  constructor(private generadorImagenService: GeneradorImagenService){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //Se obtiene la imagen generada basada en el título del posteo
  obtenerImagen(): void{
    if (!this.tituloPosteo.trim()) {
      this.error = 'Por favor, ingresa un título para el posteo.';
      this.imagen = '';
      return;
    }

    this.cargando = true;
    this.error = '';
    this.imagen = '';

    this.generadorImagenService.generateImage(this.tituloPosteo).subscribe(
      (response: any) => {
        const parts = response.candidates[0].content.parts;
        const imagePart = parts.find((part: any) => part.inlineData);

        if(imagePart && imagePart.inlineData){
          this.imagen = `data:image/png;base64,${imagePart.inlineData.data}`;
          this.error = '';
        }else{
          this.error = 'No se encontró una imagen en la respuesta.';
          this.imagen = '';
        }
        this.cargando = false;
      },
      (error: any) => {
        console.log('Error al obtener la imagen', error);
        this.error = 'No se pudo generar la imagen. Por favor, intenta de nuevo.';
        this.imagen = '';
        this.cargando = false;
      }
    );
  }
}
