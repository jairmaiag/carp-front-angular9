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
export class UsuarioListComponent implements OnInit {
  tituloComponente = "Listagem de Usuário";
  erro: any = null;
  lista: Usuario[];
  paginacao: Paginacao;
  inscricao$: Subscription;

  constructor(private usuarioService: UsuarioService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.listar();
  }
  OnDestroy() {
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
  novo() {
    this.router.navigateByUrl('/usuario/new');
  }

  editar(id: number) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${id}/edit`);
  }
  visualizar(id: number) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${id}/view`);
  }
  excluir(id: number) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl('/usuario');
  }
  cancelar() {
    this.router.navigate(['/']);
    //this.router.navigateByUrl('/');
  }
  recarregar() {
    this.router.navigate(['/usuario']);
  }
}
