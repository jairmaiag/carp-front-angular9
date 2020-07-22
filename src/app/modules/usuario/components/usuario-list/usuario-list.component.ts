import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

import { Observable, Subject, Subscription } from 'rxjs';

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
      this.lista = retorno.rows;
      console.log(retorno);
    }, erro => {
      this.erro = erro;
    });
  }
  novo() {
    this.router.navigateByUrl('/usuario/new');
  }

  editar(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${id}/edit`);
  }
  visualizar(id: any) {
    if (!id) {
      return;
    }
    // this.router.navigateByUrl(`/usuario/${id}/view`);
    this.router.navigate(['/usuario/', id, '/view']);
  }
  excluir(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl('/usuario');
  }
  cancelar() {
    this.router.navigateByUrl('/');
  }
}
