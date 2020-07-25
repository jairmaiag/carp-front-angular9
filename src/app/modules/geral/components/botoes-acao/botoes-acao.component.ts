import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botoes-acao',
  templateUrl: './botoes-acao.component.html',
  styleUrls: ['./botoes-acao.component.css']
})
export class BotoesAcaoComponent implements OnInit {

  @Output()
  acaoEdicao = new EventEmitter();

  @Output()
  acaoVisualizacao = new EventEmitter();

  @Output()
  acaoExclusao = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEdicao() {
    this.acaoEdicao.emit();
  }
  clickVisaulizacao() {
    this.acaoVisualizacao.emit()
  }
  clickExclusao() {
    this.acaoExclusao.emit();
  }

}
