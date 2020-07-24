import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  template: `
     <button type="button" class="btn btn-primary" (click)="clickBotao()">
       <i class="fa {{icone}}" aria-hidden="true"></i> {{rotulo}}
     </button>`,
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input()
  icone: string = 'fa-question';

  @Input()
  rotulo: string = '';

  @Output()
  acao = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickBotao() {
    this.acao.emit();
  }
}
