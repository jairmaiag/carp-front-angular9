import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-excluir',
  templateUrl: './botao-excluir.component.html',
  styleUrls: ['./botao-excluir.component.css']
})
export class BotaoExcluirComponent extends BotaoComponent {

  @Input()
  icone: string = 'fa-trash';

  @Output()
  acao = new EventEmitter();

  clickBotao() {
    this.acao.emit();
  }
  eventoBotaoNao() {
  }
}
