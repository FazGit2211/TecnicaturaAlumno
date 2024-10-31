import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Login } from '../../backend/login/login';
import { Usuario } from '../../backend/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private url = 'http://localhost:5125/Auth';
  constructor(private http: HttpClient) { }
  login(login: Login): Observable<any> {
    return this.http.post(`${this.url}/login`, login)
  }

  register(usuario: Usuario): Observable<any> {
    return this.http.post(this.url + '/' + 'register', usuario)
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  isLoggedIn(){
    return localStorage.getItem('token'); 
  }
}
