import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-detalhar',
  template: '<botao (acao)="clickBotao()" icone="{{icone}}"></botao>',
  styleUrls: ['./botao-detalhar.component.css']
})
export class BotaoDetalharComponent extends BotaoComponent {
  @Input()
  icone: string = 'fa-folder-open';
}