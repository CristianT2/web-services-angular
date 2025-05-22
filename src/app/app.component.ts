import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { MarcasAutosComponent } from "./marcas-autos/marcas-autos.component";
import { ConversorComponent } from "./conversor/conversor.component";

@Component({
  selector: 'app-root',
  imports: [ConversorComponent],
  styleUrl: './app.component.css',
  template: `
    <main>
      <section>
        <app-conversor></app-conversor>
      </section>
    </main>
  `
})
export class AppComponent {
  title = 'tp-webservice-3305';
}
