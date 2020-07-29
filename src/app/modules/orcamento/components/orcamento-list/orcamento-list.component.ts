import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrcamentoService } from '../../services/orcamento.service';

@Component({
  selector: 'app-orcamento-list',
  templateUrl: './orcamento-list.component.html',
  styleUrls: ['./orcamento-list.component.css']
})
export class OrcamentoListComponent implements OnInit {

  titulo: String = OrcamentoService.tituloListagem;

  constructor(private servico: OrcamentoService) { }

  ngOnInit(): void {
  }
  novo() {
    this.servico.novo();
  }
  editar(uuid: string) {
    this.servico.editar(uuid);
  }
  excluir(uuid: string) {
    console.log('Excluir ' + uuid);
  }
  detalhar(uuid: string) {
    this.servico.detalhar(uuid);
  }
  fechar() {
    this.servico.fechar();
  }
  testeSim() {
    console.log('Clicou no sim');
  }
}
