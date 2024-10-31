import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Inscripcion } from '../../backend/inscripcion/inscripcion';
import { Curso } from '../../backend/curso/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url = 'http://localhost:5125/Curso';
  constructor(private http: HttpClient) { }
  getAllData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  postData(curso:Curso): Observable<any>{
    return this.http.post(this.url,curso);
  }

  //agregar inscripcion
  addInscripcion(codigo:string,inscripcion:Inscripcion): Observable<any>{
    return this.http.put(this.url+'/'+codigo,inscripcion);
  }
}
