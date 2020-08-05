import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-detalhar',
  template: '<app-botao (acao)="clickBotao()" icone="fa-folder-open" class="btn-primary"></app-botao>',
  styleUrls: ['./botao-detalhar.component.css']
})
export class BotaoDetalharComponent extends BotaoComponent { }
