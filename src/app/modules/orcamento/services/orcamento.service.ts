import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Constantes } from '../../../modules/geral/services/constantes.service';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  static modulo = 'orcamento';
  static titulo = 'Orçamento';
  static tituloListagem = `${Constantes.listagem}${OrcamentoService.titulo}`;
  static tituloInclusao = `${Constantes.inclusao}${OrcamentoService.titulo}`;
  static tituloEdicao = `${Constantes.alteracao}${OrcamentoService.titulo}`;
  static tituloDetalhe = `${Constantes.detalhe}${OrcamentoService.titulo}`;

  constructor(private router: Router) {
  }
  getByUUId(UUId: string) {

  }
  salvar() {

  }

  novo() {
    this.router.navigate([`/${OrcamentoService.modulo}/new`]);
  }
  editar(uuid: string) {
    this.router.navigate([`/${OrcamentoService.modulo}/${uuid}/edit`]);
  }
  detalhar(uuid: string) {
    this.router.navigate([`/${OrcamentoService.modulo}/${uuid}/view`]);
  }
  voltar() {
    this.router.navigate([`/${OrcamentoService.modulo}`]);
  }
  fechar() {
    this.router.navigate([`/`]);
  }

}
