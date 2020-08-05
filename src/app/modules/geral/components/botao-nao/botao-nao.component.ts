import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-nao',
  template: '<app-botao (acao)="clickBotao()" icone="fa-ban" class="{{class}}" rotulo="Não"></app-botao>',
  styleUrls: ['./botao-nao.component.css']
})
export class BotaoNaoComponent extends BotaoComponent {

  @Input()
  class = 'btn-primary';
}
