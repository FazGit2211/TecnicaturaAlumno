import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/cursoServices/curso.service';


@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  cursos: any;
  constructor(private cursoService: CursoService){}

  ngOnInit(): void {
    this.cursoService.getAllData().subscribe(
      response => {this.cursos = response;},
      error => {console.log("Error",error)}
    )
  }
}
