import { Alumno } from "./Alumno";

export class Inscripcion{
    private fecha;
    private alumno: Alumno;

    constructor(alu:Alumno){
        this.fecha = new Date().toLocaleTimeString();
        this.alumno = alu;
    }
}