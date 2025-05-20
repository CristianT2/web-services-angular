import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { MarcasAutosComponent } from "./marcas-autos/marcas-autos.component";

@Component({
  selector: 'app-root',
  imports: [MarcasAutosComponent],
  styleUrl: './app.component.css',
  template: `
    <main>
      <section>
        <app-marcas-autos></app-marcas-autos>
      </section>
    </main>
  `
})
export class AppComponent {
  title = 'tp-webservice-3305';
}
