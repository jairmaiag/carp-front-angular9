import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-novo',
  template: '<app-botao (acao)="clickBotao()" icone="fa-file-o" rotulo="Incluir"></app-botao>',
  styleUrls: ['./botao-novo.component.css']
})

export class BotaoNovoComponent extends BotaoComponent { }
