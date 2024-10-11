import { Routes } from '@angular/router';
import { AlumnoComponent } from '../components/alumno/alumno.component';
import { CursoComponent } from '../components/curso/curso.component';

export const routes: Routes = [
    {
        'path':'alumno',
        component: AlumnoComponent,
    },
    {
        'path':'cursos',
        component: CursoComponent
    }
];

export class AppRoutingModule{}