import { Paginacao } from './../../../models/paginacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from './../../../../environments/environment.prod';
import { Global } from './../global';
import { Pessoa } from './../../../models/pessoa';
import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}${Global.modulo}`;

  constructor(private http: HttpClient) { }

  getList(): Observable<Paginacao> {
    return this.http.get<Paginacao>(`${this.API}/paginacao`);
    // return this.http.get<Paginacao>(`${this.API}/paginacao`).pipe(tap(console.log));
    // return this.http.get<Usuario[]>(`${this.API}/paginacao`).pipe(tap(console.log));
  }

  getById(id: any): Observable<Usuario> {
    const url = `${this.API}/${id}`;
    return this.http.get<Usuario>(url);
  }

  salvar(usuario: any): Observable<Usuario> {
    const entidade: Usuario = this.converter(usuario);
    if (entidade.id) {
      return this.http.put<Usuario>(this.API, entidade);
    } else {
      return this.http.post<Usuario>(this.API, entidade);
    }
  }

  delete(UUId: any): Observable<Usuario> {
    if (UUId == null) {
      return;
    }
    const url = `${this.API}UUId/${UUId}`;
    return this.http.delete<Usuario>(url);
  }

  converter(dados: any): Usuario {
    if (!dados) {
      return null;
    }
    let retorno: Usuario = new Usuario();
    let pessoa: Pessoa = new Pessoa();
    let ativo = dados?.ativo
    ativo = ativo === null ? false : ativo;
    retorno.id = dados?.id;
    retorno.login = dados?.login;
    retorno.senha = dados?.senha;
    retorno.ativo = ativo;
    pessoa.nome = dados?.nome;
    pessoa.sobrenome = dados?.sobrenome;
    pessoa.ativo = ativo;
    retorno.Pessoa = pessoa;
    return retorno;
  }
}
