import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { MarcasAutosComponent } from './marcas-autos/marcas-autos.component';
import { ConversorComponent } from './conversor/conversor.component';
import { HomeComponent } from './layout/home/home.component';
import { GeneradorImagenComponent } from './generador-imagen/generador-imagen.component';
import { ClimaComponent } from './clima/clima.component';
import { ParcialComponent } from './parcial/parcial.component';
import { ConversorPostComponent } from './conversor-post/conversor-post.component';
import { RecuperatorioComponent } from './recuperatorio/recuperatorio.component';
import { TraductorComponent } from './traductor/traductor.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
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
    },
    {
        path: 'generar-imagen',
        component: GeneradorImagenComponent,
        title: 'Generardor de Imagenes'
    },
    {
        path: 'clima',
        component: ClimaComponent,
        title: 'Clima'
    },
    {
        path: 'parcial',
        component: ParcialComponent,
        title: 'Parcial'
    },
    {
        path: 'convertir-post',
        component: ConversorPostComponent,
        title: 'ConvertirPOST'
    },
    {
        path: 'recuperatorio',
        component: RecuperatorioComponent,
        title: 'Recuperatorio'
    },
    {
        path: 'traductor',
        component: TraductorComponent,
        title: 'Traductor'
    },
    {
        path: 'conversor-post',
        component: ConversorPostComponent,
        title: 'Conversor POST'
    }
];
