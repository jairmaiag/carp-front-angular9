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
  }

  getById(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/${id}`);
  }

  getByUUId(UUId: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/UUId/${UUId}`);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    if (usuario.id) {
      return this.http.put<Usuario>(this.API, usuario);
    } else {
      return this.http.post<Usuario>(this.API, usuario);
    }
  }

  delete(UUId: any): Observable<Usuario> {
    if (UUId == null) {
      return;
    }
    const url = `${this.API}/uuid/${UUId}`;
    return this.http.delete<Usuario>(`${this.API}/UUId/${UUId}`);
  }
}
