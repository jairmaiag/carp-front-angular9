import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrcamentoService } from '../../services/orcamento.service';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.css']
})
export class OrcamentoFormComponent implements OnInit {

  titulo: String = OrcamentoService.tituloInclusao;

  constructor(private servico: OrcamentoService) { }

  ngOnInit(): void {
  }

  voltar() {
    this.servico.voltar();
  }

}
