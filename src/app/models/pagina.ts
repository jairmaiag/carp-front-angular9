export class Pagina {
    fieldName: string = "id";
    next: number = 0;
    previous: number = 0;
    previousId: number = 0;
    size: number = 10;
    total: number = 0;
    totalRows: number = 0;

    static getInstance(): Pagina {
        let retorno = new Pagina();
        retorno.fieldName = "id";
        retorno.next = 0;
        retorno.previous = 0;
        retorno.previousId = 0;
        retorno.size = 10;
        retorno.total = 0;
        retorno.totalRows = 0;
        return retorno;
    }
}
