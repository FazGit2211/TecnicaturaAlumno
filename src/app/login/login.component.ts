import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dataForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authServices:AuthenticationService) {
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
  }

  onSubmit() {
    console.log("enviar");
    const loginCredential = new Login(this.dataForm.value.usuario.nombre,this.dataForm.value.usuario.contrasenia);
    this.authServices.login(loginCredential).subscribe(
      response => {console.log(response)},
      error => console.log(error)
    )
  }
}
