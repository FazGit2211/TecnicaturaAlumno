import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:8080/admin/ciudad';
  constructor(private http:HttpClient) { }

  getAllCiudad(){
    return this.http.get(this.apiUrl);
  }
}
