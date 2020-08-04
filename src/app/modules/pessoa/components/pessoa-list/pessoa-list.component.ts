import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Paginacao } from './../../../../models/paginacao';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service'
@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit, OnDestroy {

  titulo: String = PessoaService.tituloListagem;
  paginacao: Paginacao;
  inscricao$: Subscription;
  lista: Pessoa[];
  erro: any = null;
  tituloColuna: Array<string>;

  @ViewChild('tabela')
  tabelaDom: ElementRef;

  constructor(private pessoaService: PessoaService) {
    let tab = document.getElementById('tabelaDados');
    console.log(tab);
  }

  ngOnInit(): void {
    this.tituloColuna = this.pessoaService.getListaCabecalhoTabela();
    this.listar();
  }

  ngOnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }

  listar() {
    const paginacao = this.pessoaService.getList();
    this.inscricao$ = paginacao.subscribe(retorno => {
      this.paginacao = retorno;
      console.log(retorno);
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
  excluir(id: number) {
    const excluido = this.pessoaService.excluir(id);
    this.inscricao$ = excluido.subscribe(retorno => this.listar());
  }
  detalhar(uuid: string) {
    this.pessoaService.detalhar(uuid);
  }

  fechar() {
    this.pessoaService.fechar();
  }
  recarregar() { }
}
