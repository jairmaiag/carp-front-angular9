import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrcamentoService } from '../../services/orcamento.service';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.css']
})
export class OrcamentoFormComponent implements OnInit {

  titulo: string = OrcamentoService.tituloInclusao;

  constructor(private servico: OrcamentoService, private activeRouter: ActivatedRoute) {
    const uuid = this.activeRouter.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.titulo = OrcamentoService.tituloEdicao;
      this.getByUUId(uuid);
    }
  }
  getByUUId(uuid: string) {
    this.servico.getByUUId(uuid);
  }
  ngOnInit(): void {
  }

  salvar() {

  }
  voltar() {
    this.servico.voltar();
  }

}
