import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Paginacao } from './../../../../models/paginacao';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service'
@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  paginacao: Paginacao;
  inscricao$: Subscription;
  lista: Pessoa[];
  erro: any = null;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listar();
  }
  
  listar() {
    const paginacao = this.pessoaService.getList();
    this.inscricao$ = paginacao.subscribe(retorno => {
      this.paginacao = retorno;
      this.lista = retorno.rows;
    }, erro => {
      this.erro = erro;
    });
  }
}
