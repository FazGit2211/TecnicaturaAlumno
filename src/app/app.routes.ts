import { Routes } from '@angular/router';
import { FormPasajeComponent } from '../components/formulario/form-pasaje/form-pasaje.component';
import { TecnicaturaComponent } from '../components/tecnicatura/tecnicatura.component';
import { AlumnoComponent } from '../components/alumno/alumno.component';

export const routes: Routes = [
    {
        'path':'formPasaje',
        component: FormPasajeComponent,
    },
    {
        'path':'tecnicatura',
        component: TecnicaturaComponent,
    },
    {
        'path':'alumno',
        component: AlumnoComponent,
    }
];

export class AppRoutingModule{}