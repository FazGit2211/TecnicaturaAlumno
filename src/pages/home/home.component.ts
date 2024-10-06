import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { InscripcionComponent } from '../../components/inscripcion/inscripcion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, InscripcionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
