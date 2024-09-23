import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { EmpresaServiceService } from '../../services/empresa-service.service';
import { CiudadService } from '../../services/ciudadService/ciudad.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent {

  datoForm: FormGroup;
  empresas: any;
  ciudades: any;
  @Input() estado:boolean = false;
  @Output() formularioEnviado = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder, private empresaService: EmpresaServiceService, private ciudadService: CiudadService) {
    this.datoForm = this.formBuilder.group({
      empresa: this.formBuilder.group({
        nombre:['']
      }),
      destino: this.formBuilder.group({
        ciudadOrigen:[''],
        ciudadDestino:['']
      })
    });
    this.empresaService.getAllEmpresa().forEach(elem => {
      this.empresas = elem;
    });
    this.ciudadService.getAllCiudad().subscribe(elem => this.ciudades = elem);
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
