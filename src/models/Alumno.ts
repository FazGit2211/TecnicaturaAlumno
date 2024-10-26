import { Persona } from "./Persona";

export class Alumno extends Persona{
     private codigoAlumno:string;

    constructor(nom:string,ape:string,dni:number){
        super(nom,ape,dni);
        this.codigoAlumno = Math.random().toString();
    }
}