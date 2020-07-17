import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

import { Usuario } from './../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  tituloComponente = "Listagem de Usuário";

  lista$: Observable<Usuario[]>;
  erro$ = new Subject<HttpErrorResponse>();

  constructor(private usuarioService: UsuarioService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.lista$ = this.usuarioService.getList().pipe(
      catchError(error => {
        this.erro$.next(error);
        return empty();
      })
    );
  }

  cancelar() {
    this.router.navigateByUrl('/');
  }
  novo() {
    this.router.navigateByUrl('/usuario/new');
  }
  listar() {
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
    this.router.navigateByUrl(`/usuario/${id}/view`);
  }
  excluir(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl('/usuario');
  }
}
