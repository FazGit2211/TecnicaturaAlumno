import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  private apiUrl = 'http://localhost:8080/admin/empresa';

  constructor(private http: HttpClient) { }

  getAllEmpresa(){
    return this.http.get(this.apiUrl);
  }
}
