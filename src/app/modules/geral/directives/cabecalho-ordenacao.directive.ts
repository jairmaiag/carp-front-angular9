import { Directive, EventEmitter, Input, Output, QueryList, ViewChildren, OnInit } from '@angular/core';
import { ColunaOrdenada } from './colunaOrdenada';
import { DirecaoOrdenacao } from './direcaoOrdenacao';
import { EventoOrdenacao } from './eventoOrdenacao';

@Directive({
  selector: 'th[coluna]',
  host: {
    '[class.ASC]': 'direcao === "ASC"',
    '[class.DESC]': 'direcao === "DESC"',
    '(click)': 'rotacionar()'
  }
})
export class CabecalhoOrdenacaoDirective {
  @Input() coluna: ColunaOrdenada = '';
  @Input() direcao: DirecaoOrdenacao = '';
  @Output() ordecacao = new EventEmitter<EventoOrdenacao>();
  rotacao: { [key: string]: DirecaoOrdenacao } = { 'ASC': 'DESC', 'DESC': '', '': 'ASC' };

  constructor() { }

  static comparar(valor1: string | number, valor2: string | number): number {
    return valor1 < valor2 ? -1 : valor1 > valor2 ? 1 : 0;
  }
  rotacionar() {
    this.direcao = this.rotacao[this.direcao];
    this.ordecacao.emit({ coluna: this.coluna, direcao: this.direcao });
  }
}
