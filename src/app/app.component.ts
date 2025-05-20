import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';

@Component({
  selector: 'app-root',
  imports: [NoticiasComponent],
  styleUrl: './app.component.css',
  template: `
    <main>
      <section>
        <app-noticias></app-noticias>
      </section>
    </main>
  `
})
export class AppComponent {
  title = 'tp-webservice-3305';
}
