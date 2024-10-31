import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutentificacionService } from '../../services/autentificacionServices/autentificacion.service';
import { Usuario } from '../../backend/usuario/usuario';



@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService:AutentificacionService) {
    this.dataForm = this.formBuilder.group({
      usuario: this.formBuilder.group({
        nombre: [''],
        contrasenia: [''],
        correo:['']
      })
    });
  }

  onClick() {
    console.log(this.dataForm.value.usuario.nombre);
    console.log(this.dataForm.value.usuario.contrasenia);
    console.log(this.dataForm.value.usuario.correo);
  }

  onSubmit() {
    console.log("enviar");
    const user = new Usuario(this.dataForm.value.usuario.nombre,this.dataForm.value.usuario.correo,this.dataForm.value.usuario.contrasenia);
    this.authService.register(user).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
    )
  }
}
