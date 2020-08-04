import { Pessoa } from '../../pessoa/models/pessoa';

export class Usuario {
    id?: number;
    UUId?: string;
    login?: string;
    senha: string;
    ativo?: boolean;
    expira: Date;
    Pessoa: Pessoa;

    static getInstance(): Usuario {
        const retorno: Usuario = new Usuario();
        retorno.login = '';
        retorno.senha = '';
        retorno.ativo = true;
        retorno.expira = null;
        retorno.Pessoa = Pessoa.getInstance();
        return retorno;
    }
}
