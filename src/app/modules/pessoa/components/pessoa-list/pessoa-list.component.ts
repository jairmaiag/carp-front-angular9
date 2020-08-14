import { Component, ViewChildren, QueryList, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Paginacao } from './../../../../models/paginacao';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { CabecalhoOrdenacaoDirective } from './../../../geral/directives/cabecalho-ordenacao.directive';
import { EventoOrdenacao } from './../../../geral/directives/eventoOrdenacao';
@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit, OnDestroy {

  titulo: string = PessoaService.tituloListagem;
  paginacao: Paginacao = new Paginacao();
  inscricao$: Subscription;
  lista: Pessoa[];
  listaTemp: Pessoa[];
  erro: any = null;
  tituloColuna: Array<string>;

  @ViewChildren(CabecalhoOrdenacaoDirective) cabecalhos: QueryList<CabecalhoOrdenacaoDirective>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.tituloColuna = this.pessoaService.getListaCabecalhoTabela();
    this.paginacao.page.directionOrder = "ASC";
    this.paginacao.page.fieldOrder = "nome";
    this.listar();
    //let ordenar: EventoOrdenacao = { coluna: 'nome', direcao: 'asc' };
    //this.onOrdem(ordenar);
  }

  ngOnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }

  onOrdem({ coluna, direcao }: EventoOrdenacao) {
    this.cabecalhos.forEach(tituloColuna => {
      if (tituloColuna.coluna !== coluna) {
        tituloColuna.direcao = '';
      }
    });

    if (direcao === '' || coluna === '') {
      this.lista = this.listaTemp;
    } else {
      this.paginacao.page.directionOrder = direcao.toUpperCase();
      this.paginacao.page.fieldOrder = coluna;
      this.lista.sort((a, b) => {
        const res = CabecalhoOrdenacaoDirective.comparar(a[coluna], b[coluna]);
        return direcao === 'ASC' ? res : -res;
      });
    }
  }

  listar() {
    console.log(this.paginacao);
    const paginacao = this.pessoaService.getList(this.paginacao);
    this.inscricao$ = paginacao.subscribe(retorno => {
      console.log(retorno);
      this.paginacao = retorno;
      this.lista = retorno.rows;
      this.listaTemp = retorno.rows;
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
