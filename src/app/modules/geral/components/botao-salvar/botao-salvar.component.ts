import { Component, Input } from '@angular/core';
import { BotaoComponent } from './../botao/botao.component';

@Component({
  selector: 'app-botao-salvar',
  template: '<app-botao (acao)="clickBotao()" icone="fa-floppy-o" tipo="submit" [desabilitado]="desabilitado" rotulo="Salvar"></app-botao>',
  styleUrls: ['./botao-salvar.component.css']
})

export class BotaoSalvarComponent extends BotaoComponent {

  @Input()
  desabilitado = false;

}
