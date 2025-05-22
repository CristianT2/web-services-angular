import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, FooterComponent],
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
    <footer>
      <app-footer></app-footer>
    </footer>
  `
})
export class AppComponent {
  title = 'tp-webservice-3305';
}
