import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/Curso';
import { Alumno } from '../../models/Alumno';
import { Inscripcion } from '../../models/Inscripcion';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent implements OnInit {

  datoForm: FormGroup;
  cursos: any;

  @Input() estado: boolean = false;
  @Output() formularioEnviado = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder, private cursosService: CursosService) {
    this.datoForm = this.formBuilder.group({
      persona: this.formBuilder.group({
        nombre: [''],
        apellido: [''],
        dni: ['']
      }),
      curso: ['']
    });
  }

  ngOnInit(): void {
    this.cursosService.getAllData().subscribe(
      response => {
        this.cursos = response;
      },
      error => { console.log("Error", +error) }
    )
  }

  onClick() {
    //separar los valores de la concatenacion
    let cursoValue = this.datoForm.value.curso.split(',');
    const alu = new Alumno(this.datoForm.value.persona.nombre, this.datoForm.value.persona.apellido, this.datoForm.value.persona.dni);
    const inscripcion = new Inscripcion(alu);
    let codigoCurso = cursoValue[0];
    this.cursosService.addInscripcion(codigoCurso,inscripcion).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log("Error al enviar curso" + error)
      }
    )
  }

  onSubmit() {
    console.log("Enviando Formulario");
    //this.router.navigate(['formPasaje']);
    this.estado = true;
    this.formularioEnviado.emit(true);
  }


}
