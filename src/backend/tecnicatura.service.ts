import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicaturaService {

  private apiUrl = 'http://localhost:8080/tecnicatura';

  constructor(private http: HttpClient) { }

    // Método para obtener datos
    getData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}`); // Reemplaza con tu endpoint
    }
  
    // Método para enviar datos
    postData(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/endpoint`, data); // Reemplaza con tu endpoint
    }
}
