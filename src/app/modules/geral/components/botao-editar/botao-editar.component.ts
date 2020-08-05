import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';


@Component({
  selector: 'botao-editar',
  template: '<botao (acao)="clickBotao()" icone="fa-pencil"></botao>',
  styleUrls: ['./botao-editar.component.css']
})
export class BotaoEditarComponent extends BotaoComponent { }
