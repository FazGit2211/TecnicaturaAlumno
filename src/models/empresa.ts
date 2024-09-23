import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Empresa {
    private url = 'http://localhost:8080/admin/empresa'

    constructor(private http: HttpClient) { }

    // Método para obtener datos
    getData(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}
