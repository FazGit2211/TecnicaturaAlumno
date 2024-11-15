import { Routes } from '@angular/router';
import { AlumnoComponent } from '../components/alumno/alumno.component';
import { CursoComponent } from '../components/curso/curso.component';

import { RegistroComponent } from '../components/registro/registro.component';
import { InscripcionComponent } from '../components/inscripcion/inscripcion.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    {
        'path': 'alumno',
        component: AlumnoComponent,
    },
    {
        'path': 'cursos',
        component: CursoComponent
    },
    {
        'path': 'login',
        component: LoginComponent
    },
    {
        'path': 'registroForm',
        component: RegistroComponent
    },
    {
        'path': 'inscripcion',
        component: InscripcionComponent
    }
];

export class AppRoutingModule { }