import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Constantes } from '../../../modules/geral/services/constantes.service';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  static modulo: string = 'orcamento';
  static titulo: string = 'Orçamento';
  static tituloListagem: string = `${Constantes.listagem}${OrcamentoService.titulo}`;
  static tituloInclusao: string = `${Constantes.inclusao}${OrcamentoService.titulo}`;
  static tituloEdicao: string = `${Constantes.alteracao}${OrcamentoService.titulo}`;
  static tituloDetalhe: string = `${Constantes.detalhe}${OrcamentoService.titulo}`;

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
  constructor(private router: Router) { }
}
