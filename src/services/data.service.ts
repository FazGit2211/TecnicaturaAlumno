import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/options'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener datos desde la API
  getOptions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}