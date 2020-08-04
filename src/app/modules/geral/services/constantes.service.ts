import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constantes {
  static inclusao = 'Inclusão de ';
  static alteracao = 'Edição de ';
  static detalhe = 'Detalhe de ';
  static listagem = 'Listagem de ';
  constructor() { }
}
