import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from './../../../../environments/environment';
import { Constantes } from '../../../modules/geral/services/constantes.service';

import { Paginacao } from './../../../models/paginacao';
import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  static modulo = 'usuario';
  static titulo = 'Usuário';
  static tituloListagem = `${Constantes.listagem}${UsuarioService.titulo}`;
  static tituloInclusao = `${Constantes.inclusao}${UsuarioService.titulo}`;
  static tituloEdicao = `${Constantes.alteracao}${UsuarioService.titulo}`;
  static tituloDetalhe = `${Constantes.detalhe}${UsuarioService.titulo}`;

  private readonly API = `${environment.API}${UsuarioService.modulo}`;

  constructor(private http: HttpClient, private router: Router) { }

  getList(): Observable<Paginacao> {
    return this.http.get<Paginacao>(`${this.API}/paginacao`);
  }

  getById(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/${id}`);
  }

  getByUUId(UUId: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/UUId/${UUId}`);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    if (usuario == null) {
      return null;
    }
    if (usuario.id) {
      return this.http.put<Usuario>(this.API, usuario);
    } else {
      return this.http.post<Usuario>(this.API, usuario);
    }
  }

  excluir(id: number): Observable<number> {
    if (!id) {
      return;
    }
    return this.http.delete<number>(`${this.API}/${id}`);
  }

  novo() {
    this.router.navigate([`/${UsuarioService.modulo}/new`]);
  }

  editar(uuid: string) {
    this.router.navigate([`/${UsuarioService.modulo}/${uuid}/edit`]);
  }

  detalhar(uuid: string) {
    this.router.navigate([`/${UsuarioService.modulo}/${uuid}/view`]);
  }

  voltar() {
    this.router.navigate([`/${UsuarioService.modulo}`]);
  }

  fechar() {
    this.router.navigate([`/`]);
  }
}
