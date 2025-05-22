import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { MarcasAutosComponent } from './marcas-autos/marcas-autos.component';
import { ConversorComponent } from './conversor/conversor.component';

export const routes: Routes = [
    {
        path: 'noticias',
        component: NoticiasComponent,
        title: 'Noticias'
    },
    {
        path: 'marcas-autos',
        component: MarcasAutosComponent,
        title: 'Marcas de Autos'
    },
    {
        path: 'conversor',
        component: ConversorComponent,
        title: 'Conversor de Monedas'
    }
];
