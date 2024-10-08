import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url = 'http://localhost:5125/Curso';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  postData(curso:Curso): Observable<any>{
    return this.http.post(this.url,curso);
  }
}
