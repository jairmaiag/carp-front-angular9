import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-cancelar',
  template: '<app-botao (acao)="clickBotao()" icone="fa-ban" rotulo="Cancelar"></app-botao>',
  styleUrls: ['./botao-cancelar.component.css']
})
export class BotaoCancelarComponent extends BotaoComponent {
}
