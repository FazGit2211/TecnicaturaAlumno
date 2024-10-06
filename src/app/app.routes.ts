import { Routes } from '@angular/router';
import { AlumnoComponent } from '../components/alumno/alumno.component';

export const routes: Routes = [
    {
        'path':'alumno',
        component: AlumnoComponent,
    }
];

export class AppRoutingModule{}