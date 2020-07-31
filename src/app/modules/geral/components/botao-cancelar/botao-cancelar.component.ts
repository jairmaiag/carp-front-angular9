import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-cancelar',
  template: '<botao (acao)="clickBotao()" icone="{{icone}}" rotulo="Cancelar"></botao>',
  styleUrls: ['./botao-cancelar.component.css']
})
export class BotaoCancelarComponent extends BotaoComponent {
  @Input()
  icone: string = 'fa-ban';
}
