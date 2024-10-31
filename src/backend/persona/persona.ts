export class Persona {
    private nombre: string;
    private apellido: string;
    private dni: number;

    constructor(nom: string, ape: string, dni: number) {
        this.nombre = nom;
        this.apellido = ape;
        this.dni = dni;
    }
}

