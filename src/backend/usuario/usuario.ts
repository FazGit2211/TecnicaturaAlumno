export class Usuario {
    private nombre: string
    private correo: string
    private contrasena: string
    private rol: string;

    constructor(nombre: string, correo: string, contrasenia: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasenia;
        this.rol = "";
    }
}
