export class Sexo {
    constructor(_id: string, _descricao: string) {
        this.id = _id;
        this.descricao = _descricao;
    }
    id: string;
    descricao: string;

    static getInstance(): Sexo {
        return new Sexo('F', 'Feminino');
    }

    static getInstanceList(): Sexo[] {
        let retorno: Sexo[] = new Array<Sexo>();
        retorno.push(new Sexo('M', 'Masculino'));
        retorno.push(new Sexo('F', 'Feminino'));
        return retorno;
    }
}