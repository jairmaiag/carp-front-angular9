import { Pessoa } from './../../../models/pessoa';
export class Usuario {
    id?: any;
    UUId?: String;
    login?: String;
    senha: String;
    ativo?: boolean;
    expira: Date;
    Pessoa?: Pessoa;
}
