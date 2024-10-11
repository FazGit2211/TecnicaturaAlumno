import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  cursos: any;
  constructor(private cursoService: CursosService){}

  ngOnInit(): void {
    this.cursoService.getAllData().subscribe(
      response => {this.cursos = response;},
      error => {console.log("Error",error)}
    )
  }
}
