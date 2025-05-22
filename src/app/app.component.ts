import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  styleUrl: './app.component.css',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <main>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
    <footer></footer>
  `
})
export class AppComponent {
  title = 'tp-webservice-3305';
}
