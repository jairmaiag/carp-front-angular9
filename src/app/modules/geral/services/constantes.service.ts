import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constantes {
  static inclusao: String = 'Inclusão de ';
  static alteracao: String = 'Edição de ';
  static detalhe: String = 'Detalhe de ';
  static listagem: String = 'Listagem de ';
  constructor() { }
}
