import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';
import { Constantes } from '../../../modules/geral/services/constantes.service';
import { Paginacao } from './../../../models/paginacao';
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

  constructor(private http: HttpClient) { }

  getList(): Observable<Paginacao> {
    return this.http.get<Paginacao>(`${this.API}/paginacao`);
  }

}
