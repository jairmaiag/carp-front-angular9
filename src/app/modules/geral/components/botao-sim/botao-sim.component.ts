import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-sim',
  template: '<botao (acao)="clickBotao()" icone="fa-check" class="{{ class }}" rotulo="Sim"></botao>',
  styleUrls: ['./botao-sim.component.css']
})
export class BotaoSimComponent extends BotaoComponent {
  @Input()
  class: string = 'btn-primary';
}
