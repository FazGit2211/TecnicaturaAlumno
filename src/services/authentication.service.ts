import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:5125/Auth';
  constructor(private http: HttpClient) { }

  login(login:Login): Observable<any> {
    return this.http.post(`${this.url}/login`, login, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })});
  }

  register(usuario: Usuario): Observable<any> {
    return this.http.post(this.url+'/'+'register', usuario)
    }
}
