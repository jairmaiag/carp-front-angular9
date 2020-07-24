import { Component, OnInit } from '@angular/core';

import { OrcamentoService } from '../../services/orcamento.service';

@Component({
  selector: 'app-orcamento-view',
  templateUrl: './orcamento-view.component.html',
  styleUrls: ['./orcamento-view.component.css']
})
export class OrcamentoViewComponent implements OnInit {

  titulo: String = OrcamentoService.tituloDetalhe;

  constructor(private servico: OrcamentoService) { }

  ngOnInit(): void {
  }
  voltar() {
    this.servico.voltar();
  }
}
