export class Sexo {
    constructor(id: string, descricao: string) {
        this.id = id;
        this.descricao = descricao;
    }
    id: string;
    descricao: string;

    static getInstance(): Sexo {
        return new Sexo('F', 'Feminino');
    }

    static getInstanceList(): Sexo[] {
        const retorno: Sexo[] = new Array<Sexo>();
        retorno.push(new Sexo('M', 'Masculino'));
        retorno.push(new Sexo('F', 'Feminino'));
        return retorno;
    }
}
