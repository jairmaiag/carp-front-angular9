import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrcamentoService } from '../../services/orcamento.service';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.css']
})
export class OrcamentoFormComponent implements OnInit {

  titulo: String = OrcamentoService.tituloInclusao;

  constructor(private servico: OrcamentoService, private activeRouter: ActivatedRoute) {
    let uuid = this.activeRouter.snapshot.paramMap.get('uuid')
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

  voltar() {
    this.servico.voltar();
  }

}
