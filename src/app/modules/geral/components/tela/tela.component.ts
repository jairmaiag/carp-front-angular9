import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  @Input()
  titulo: string;

  constructor() { }

  ngOnInit(): void {
  }
  fechar() {
    console.log('Fechar foi clicado');
  }
}
