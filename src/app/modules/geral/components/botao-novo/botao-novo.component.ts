import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'botao-novo',
  template: '<botao (acao)="clickBotao()" icone="fa-file-o" rotulo="Incluir"></botao>',
  styleUrls: ['./botao-novo.component.css']
})

export class BotaoNovoComponent extends BotaoComponent { }
