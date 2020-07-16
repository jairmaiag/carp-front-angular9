import { Injectable } from '@angular/core';

import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getList(): Array<Usuario> {
    return null;
  }
  getById(id: any): Usuario {
    return null;
  }
  salve(usuario: Usuario) {

  }
  delete(id: any) {

  }
}
