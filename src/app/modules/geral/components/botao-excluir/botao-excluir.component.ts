import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-excluir',
  templateUrl: './botao-excluir.component.html',
  styleUrls: ['./botao-excluir.component.css']
})
export class BotaoExcluirComponent extends BotaoComponent {

  @Input()
  icone = 'fa-trash';

  @Output()
  acao = new EventEmitter();

  @Input()
  class = 'btn-primary';

  clickBotao() {
    this.acao.emit();
  }
  eventoBotaoNao() {
  }
}
