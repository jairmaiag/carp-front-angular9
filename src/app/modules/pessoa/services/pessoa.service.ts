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
  salvar(pessoa: Pessoa): Pessoa {
    return null;

  }

  fechar() {
    this.router.navigate([`/`]);
  }

}
