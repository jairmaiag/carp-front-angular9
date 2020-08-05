import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-fechar',
  template: '<app-botao (acao)="clickBotao()" icone="fa-times"></app-botao>',
  styleUrls: ['./botao-fechar.component.css']
})

export class BotaoFecharComponent extends BotaoComponent { }
