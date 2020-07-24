import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'titulo-tela',
  templateUrl: './titulo-tela.component.html',
  styleUrls: ['./titulo-tela.component.css']
})
export class TituloTelaComponent implements OnInit {

  @Input()
  titulo: string;

  @Output()
  acaoFechar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fechar() {
    this.acaoFechar.emit();
  }
}
