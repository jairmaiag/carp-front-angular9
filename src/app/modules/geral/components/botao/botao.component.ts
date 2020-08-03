import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  template: `
     <button type="{{tipo}}" class="btn {{class}}" (click)="clickBotao()" [disabled]="desabilitado">
       <i class="fa {{icone}}" aria-hidden="true"></i> {{rotulo}}
     </button>`,
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input()
  icone: string = 'fa-question';

  @Input()
  rotulo: string = '';

  @Input()
  class: string = 'btn-primary';

  @Input()
  desabilitado: boolean = false;

  @Output()
  acao = new EventEmitter();

  @Input()
  tipo: string = 'button';

  constructor() { }

  ngOnInit(): void {
  }

  clickBotao() {
    this.acao.emit();
  }
}
