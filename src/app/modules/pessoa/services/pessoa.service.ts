import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';
import { Constantes } from '../../../modules/geral/services/constantes.service';
import { Paginacao } from './../../../models/paginacao';
import { Pessoa } from '../models/pessoa';
import { Sexo } from '../../geral/models/sexo';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  static modulo = 'pessoa';
  static titulo = 'Pessoa';
  static tituloListagem = `${Constantes.listagem}${PessoaService.titulo}`;
  static tituloInclusao = `${Constantes.inclusao}${PessoaService.titulo}`;
  static tituloEdicao = `${Constantes.alteracao}${PessoaService.titulo}`;
  static tituloDetalhe = `${Constantes.detalhe}${PessoaService.titulo}`;

  private readonly API = `${environment.API}${PessoaService.modulo}`;

  constructor(private http: HttpClient, private router: Router) { }

  getList(paginacao: Paginacao): Observable<Paginacao> {
    let params = new HttpParams();
    params = params.append('size', paginacao.page.size.toString());
    params = params.append('fieldOrder', paginacao.page.fieldOrder);
    params = params.append('directionOrder', paginacao.page.directionOrder);
    params = params.append('totalRows', paginacao.page.totalRows.toString());
    params = params.append('next', paginacao.page.next.toString());
    params = params.append('previousId', paginacao.page.previousId.toString());

    return this.http.get<Paginacao>(`${this.API}/paginacao`, { params });
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
    if (pessoa.id) {
      return this.http.put<Pessoa>(this.API, pessoa);
    } else {
      return this.http.post<Pessoa>(this.API, pessoa);
    }
  }
  excluir(id: number): Observable<number> {
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

  getListaSexo() {
    return Sexo.getInstanceList();
  }
  getListaCabecalhoTabela(): string[] {
    const retorno = Array<string>();
    retorno.push('Nome');
    retorno.push('Ativo');
    retorno.push('Nascimento');
    retorno.push('Sexo');
    retorno.push('RG');
    retorno.push('CPF');
    retorno.push('Ação');
    return retorno;
  }
}
