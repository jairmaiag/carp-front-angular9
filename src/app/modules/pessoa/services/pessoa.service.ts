import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';
import { Constantes } from '../../../modules/geral/services/constantes.service';
import { Paginacao } from './../../../models/paginacao';
import { Pessoa } from '../models/pessoa';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  static modulo: string = 'pessoa';
  static titulo: string = 'Pessoa';
  static tituloListagem: string = `${Constantes.listagem}${PessoaService.titulo}`;
  static tituloInclusao: string = `${Constantes.inclusao}${PessoaService.titulo}`;
  static tituloEdicao: string = `${Constantes.alteracao}${PessoaService.titulo}`;
  static tituloDetalhe: string = `${Constantes.detalhe}${PessoaService.titulo}`;

  private readonly API = `${environment.API}${PessoaService.modulo}`;

  constructor(private http: HttpClient, private router: Router) { }

  getList(): Observable<Paginacao> {
    return this.http.get<Paginacao>(`${this.API}/paginacao`);
  }

  getById(id: any): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.API}/${id}`);
  }

  getBUUId(id: any): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.API}/UUId/${id}`);
  }
  salvar(pessoa: Pessoa): Observable<Pessoa> {
    if (pessoa == null) {
      return null;
    }
    let caminho = this.API;
    if (pessoa.id) {
      return this.http.put<Pessoa>(caminho, pessoa);
    } else {
      return this.http.post<Pessoa>(caminho, pessoa);
    }
  }
  excluir(id: number):Observable<number> {
    if (!id) {
      return;
    }
    return this.http.delete<number>(`${this.API}/${id}`);
  }
  novo() {
    this.router.navigate([`/${PessoaService.modulo}/new`]);
  }
  editar(uuid: string) {
    this.router.navigate([`/${PessoaService.modulo}/${uuid}/edit`]);
  }
  detalhar(uuid: string) {
    this.router.navigate([`/${PessoaService.modulo}/${uuid}/view`]);
  }
  voltar() {
    this.router.navigate([`/${PessoaService.modulo}`]);
  }

  fechar() {
    this.router.navigate([`/`]);
  }

}
