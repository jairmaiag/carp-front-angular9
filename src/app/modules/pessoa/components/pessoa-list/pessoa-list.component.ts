import { Component, OnInit, OnDestroy } from '@angular/core';
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

  titulo: String = PessoaService.tituloListagem;
  paginacao: Paginacao;
  inscricao$: Subscription;
  lista: Pessoa[];
  erro: any = null;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listar();
  }

  OnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
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
  novo() {
    this.pessoaService.novo();
    this.listar();
  }
  editar(uuid: string) {
    this.pessoaService.editar(uuid);
  }
  excluir(id) {
    console.log(id);
    //const excluido = this.pessoaService.excluir(id);
    //this.inscricao$ = excluido.subscribe(retorno => this.listar());
  }
  detalhar(uuid: string) {
    this.pessoaService.detalhar(uuid);
  }

  fechar() {
    console.log('Fechar da listagem');
    this.pessoaService.fechar();
  }
  recarregar() { }
}
