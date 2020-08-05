import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-sim',
  template: '<app-botao (acao)="clickBotao()" icone="fa-check" class="{{ class }}" rotulo="Sim"></app-botao>',
  styleUrls: ['./botao-sim.component.css']
})
export class BotaoSimComponent extends BotaoComponent {
  @Input()
  class = 'btn-primary';
}
