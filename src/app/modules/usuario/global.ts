import { Injectable } from '@angular/core';

@Injectable()
export class Global {
    static modulo: String = 'usuario';
    titulo: String = 'Usuário';
    inclusao: String = 'Inclusão de ';
    alteracao: String = 'Alteração de ';
    detalhe: String = 'Detalhe do ';
    listagem: String = 'Listagem de ';
}