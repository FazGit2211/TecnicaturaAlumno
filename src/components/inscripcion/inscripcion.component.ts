import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent implements OnInit{

  cursos: any;

  constructor(private cursoService: CursosService){}

  ngOnInit(): void {
      this.cursoService.getAllData().subscribe(
        response => {
          this.cursos = response;
        },
        error => {console.log("Error",+error)}
      )
  }
}
