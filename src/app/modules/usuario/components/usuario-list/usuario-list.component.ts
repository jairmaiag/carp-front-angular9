import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Paginacao } from './../../../../models/paginacao';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  titulo: string = UsuarioService.tituloListagem;
  paginacao: Paginacao;
  inscricao$: Subscription;
  lista: Usuario[];
  erro: any = null;

  constructor(private usuarioService: UsuarioService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }

  ngOnDestroy() {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }
  listar() {
    const paginacao = this.usuarioService.getList();
    this.inscricao$ = paginacao.subscribe(retorno => {
      this.paginacao = retorno;
      this.lista = retorno.rows;
    }, erro => {
      this.erro = erro;
    });
  }

  visualizar(uuid: string) {
    if (!uuid) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${uuid}/view`);
  }
  novo() {
    this.usuarioService.novo();
    this.listar();
  }
  editar(uuid: string) {
    this.usuarioService.editar(uuid);
  }
  excluir(id: number) {
    const excluido = this.usuarioService.excluir(id);
    this.inscricao$ = excluido.subscribe(retorno => this.listar());
  }
  detalhar(uuid: string) {
    this.usuarioService.detalhar(uuid);
  }

  fechar() {
    this.usuarioService.fechar();
  }
  cancelar() {
    this.router.navigate(['/']);
  }
  recarregar() {
    this.erro = null;
    this.lista = [];
    this.listar();
  }
}
