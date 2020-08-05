import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-nao',
  template: '<botao (acao)="clickBotao()" icone="fa-ban" class="{{class}}" rotulo="Não"></botao>',
  styleUrls: ['./botao-nao.component.css']
})
export class BotaoNaoComponent extends BotaoComponent {

  @Input()
  class: string = 'btn-primary';
}
