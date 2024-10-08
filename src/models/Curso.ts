export class Curso{
    private codigoCurso: string;
    private nombreCurso: string;
    private anio: string;
    private cuatrimestre:  string;

    constructor(cod:string,nom:string,anio:string,cuatrimestre:string){
        this.codigoCurso = cod;
        this.nombreCurso = nom;
        this.anio = anio;
        this.cuatrimestre = cuatrimestre;
    }
}