import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-salvar',
  template: '<botao (acao)="clickBotao()" icone="{{icone}}"></botao>',
  styleUrls: ['./botao-salvar.component.css']
})

export class BotaoSalvarComponent extends BotaoComponent {
  @Input()
  icone: string = 'fa-floppy-o';
}
