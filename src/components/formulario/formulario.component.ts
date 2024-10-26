import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';


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
  @Output() formularioEnviado = new EventEmitter<any>()

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

  onSubmit() {
    console.log("Enviando Formulario");
    //this.router.navigate(['formPasaje']);
    this.formularioEnviado.emit(this.datoForm.value);
  }


}
