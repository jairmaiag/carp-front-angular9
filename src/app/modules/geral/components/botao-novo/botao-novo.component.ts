import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-novo',
  template: '<botao (acao)="clickBotao()" icone="{{icone}}"></botao>',
  styleUrls: ['./botao-novo.component.css']
})

export class BotaoNovoComponent extends BotaoComponent {
  @Input()
  icone: string = 'fa-file-o';
}
