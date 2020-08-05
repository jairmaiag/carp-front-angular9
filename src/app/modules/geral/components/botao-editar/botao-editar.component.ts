import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';


@Component({
  selector: 'app-botao-editar',
  template: '<app-botao (acao)="clickBotao()" icone="fa-pencil"></app-botao>',
  styleUrls: ['./botao-editar.component.css']
})
export class BotaoEditarComponent extends BotaoComponent { }
