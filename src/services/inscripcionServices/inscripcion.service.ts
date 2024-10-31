import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../backend/inscripcion/inscripcion';


@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private url = 'http://localhost:5125/Inscripcion';

  constructor(private http: HttpClient) { }

  getAllInscripcion(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  postInscripcion(inscripcion: Inscripcion): Observable<any>{
    return this.http.post<any>(this.url,inscripcion);
  }

}
