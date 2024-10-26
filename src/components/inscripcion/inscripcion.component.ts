import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Alumno } from '../../models/Alumno';
import { Inscripcion } from '../../models/Inscripcion';
import { InscripcionService } from '../../services/inscripcionServices/inscripcion.service';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {

  datoForm:any;
  estadoBtn:boolean = false;
  constructor(private inscripcionService: InscripcionService, private cursosService: CursosService){}
  
  obtenerDatosFormulario(datos: any) {
    console.log("Formulario", datos);
    this.estadoBtn = true;
  }

  onSubmit() {
    //separar los valores de la concatenacion del select option
    let cursoValue = this.datoForm.value.curso.split(',');
    const alu = new Alumno(this.datoForm.value.persona.nombre, this.datoForm.value.persona.apellido, this.datoForm.value.persona.dni);
    const inscripcion = new Inscripcion(alu);
    this.inscripcionService.postInscripcion(inscripcion)
    //obtener el codigo de la posicion
    let codigoCurso = cursoValue[0];
    this.cursosService.addInscripcion(codigoCurso, inscripcion)
  }
}
