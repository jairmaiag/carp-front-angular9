import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  @Input()
  titulo: string;

  @Output()
  botaoFechar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fechar() {
    this.botaoFechar.emit();
  }
}
