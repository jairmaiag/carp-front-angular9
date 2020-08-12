import { ColunaOrdenada } from './colunaOrdenada';
import { DirecaoOrdenacao } from './direcaoOrdenacao';

export interface EventoOrdenacao {
    coluna: ColunaOrdenada;
    direcao: DirecaoOrdenacao;
}
