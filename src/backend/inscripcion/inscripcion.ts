import { Alumno } from "../alumno/alumno";

export class Inscripcion {
    private fecha;
    private alumno: Alumno;
    private codigoInscripcion: string;

    constructor(alu: Alumno) {
        this.fecha = new Date().toLocaleTimeString();
        this.alumno = alu;
        this.codigoInscripcion = Math.random().toString();
    }
}
