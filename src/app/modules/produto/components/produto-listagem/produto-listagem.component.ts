import { Component, OnInit } from '@angular/core';
import { Global } from './../../global';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {
  tituloForm: String;
  global: Global;

  constructor(global: Global) {
    this.global = global;
    this.tituloForm = `${this.global.listagem}${this.global.modulo}`;
  }

  ngOnInit(): void {
  }

  excluir(id: any): void {
    console.log(id);
  }
}
