import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-fechar',
  template: '<botao (acao)="clickBotao()" icone="{{icone}}"></botao>',
  styleUrls: ['./botao-fechar.component.css']
})

export class BotaoFecharComponent extends BotaoComponent {
  @Input()
  icone: string = 'fa-times';
}
