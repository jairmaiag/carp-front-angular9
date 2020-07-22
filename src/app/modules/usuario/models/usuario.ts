import { Pessoa } from './../../../models/pessoa';

export class Usuario {
    id?: number;
    UUId?: string;
    login?: string;
    senha: string;
    ativo?: boolean;
    expira: Date;
    Pessoa: {};
}
