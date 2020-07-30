export class Pessoa {
    id: number;
    nome: string;
    nomeMeio?: string;
    sobrenome?: string;
    nascimento?: Date;
    sexo?: string;
    cpf?: string;
    rg?: string;
    ativo: boolean;

    static getInstance(): Pessoa {
        let retorno: Pessoa = new Pessoa();
        retorno.nome = '';
        retorno.nomeMeio = '';
        retorno.sobrenome = '';
        retorno.nascimento = new Date();
        retorno.sexo = 'F';
        retorno.cpf = '';
        retorno.rg = '';
        retorno.ativo = true;
        return retorno;
    }
}
