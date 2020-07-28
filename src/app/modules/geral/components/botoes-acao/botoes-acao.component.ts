import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'botoes-acao',
  templateUrl: './botoes-acao.component.html',
  styleUrls: ['./botoes-acao.component.css']
})
export class BotoesAcaoComponent implements OnInit {

  @Input()
  idRegistro: number;

  @Output()
  acaoEdicao = new EventEmitter();

  @Output()
  acaoVisualizacao = new EventEmitter();

  @Output()
  acaoExclusao = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.acaoExclusao);
    let m = $('#modalExcluir');
    console.log(m);
    m.on('show.bs.modal', function (event) {
      console.log(event)
    });

  }

  clickEdicao() {
    this.acaoEdicao.emit();
  }
  clickVisaulizacao() {
    this.acaoVisualizacao.emit()
  }
  clickExclusao() {

    return this.acaoExclusao.emit(this.idRegistro);
    //console.log(this.idRegistro);
  }
}
