import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take,tap } from 'rxjs/operators';
import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost/usuario';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Usuario[]>(this.API).pipe(tap(console.log));
  }
  getById(id: any): Usuario {
    return null;
  }
  salvar(usuario: any) {
    let retorno: any = this.http.post(this.API, this.converter(usuario)).pipe(take(1));
    console.log(retorno);
    return retorno;
    //console.log(this.converter(usuario));
  }
  delete(id: any) {

  }
  converter(dados: any): Usuario {
    if (!dados) {
      return null;
    }
    let retorno: Usuario = new Usuario();
    let ativo = dados?.ativo
    ativo = ativo === null ? false : ativo;
    retorno.id = dados?.id;
    retorno.login = dados?.login;
    retorno.ativo = ativo;
    retorno.pessoa = {
      nome: dados?.nome,
      sobrenome: dados?.sobrenome,
      ativo: ativo
    }
    return retorno;
  }
}
