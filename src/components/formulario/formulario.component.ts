import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent implements OnInit{

  datoForm: FormGroup;
  cursos: any;
  
  @Input() estado:boolean = false;
  @Output() formularioEnviado = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder, private cursosService: CursosService) {
    this.datoForm = this.formBuilder.group({
      persona: this.formBuilder.group({
        nombre:[''],
        apellido:[''],
        dni:[''],
        numeroAlumno:['']
      }),
      curso:['']
    });
  }

  ngOnInit(): void {
    this.cursosService.getAllData().subscribe(
      response => {
        this.cursos = response;
      },
      error => {console.log("Error",+error)}
    )
}



 

  /*datoForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    dni: new FormControl(0),
    empresa: new FormGroup({
      nombre: new FormControl(''),
    })
  })*/



  onClick() {
    console.log(this.datoForm.value.nombre)
    console.log(this.datoForm.value.apellido)
    console.log(this.datoForm.value.dni)
    console.log(this.datoForm.value.empresa?.nombre)
    console.log(this.datoForm.value.destino?.ciudadDestino)
  }

  onSubmit() {
    console.log("Enviando Formulario");
    //this.router.navigate(['formPasaje']);
    this.estado = true;
    this.formularioEnviado.emit(true);
  }


}
