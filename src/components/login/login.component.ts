import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { Login } from '../../backend/login/login';
import { AutentificacionService } from '../../services/autentificacionServices/autentificacion.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dataForm: FormGroup;
  
  tokenAccess:boolean = false;
  tokenInvalidAccess:string = "";
  constructor(private formBuilder: FormBuilder, private authServices: AutentificacionService) {
    this.dataForm = this.formBuilder.group({
      usuario: this.formBuilder.group({
        nombre: [''],
        contrasenia: ['']
      })
    });
  }

  onClick() {
    console.log(this.dataForm.value.usuario.nombre);
    console.log(this.dataForm.value.usuario.contrasenia);
    console.log(this.tokenAccess)
    console.log(this.tokenInvalidAccess)
  }

  onSubmit() {
    console.log("enviar");
    const loginCredential = new Login(this.dataForm.value.usuario.nombre,this.dataForm.value.usuario.contrasenia);
    this.authServices.login(loginCredential).subscribe(
      response => {this.tokenAccess = response},
      error => this.tokenInvalidAccess = error.status
    )
  }
}
