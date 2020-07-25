import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from '../../services/pessoa.service'
import { Pessoa } from '../../models/pessoa';
@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  titulo: String = PessoaService.tituloInclusao;
  id: any;
  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('uuid');
    if (this.id != null) {
      this.titulo = `${PessoaService.tituloEdicao}`;
      this.pessoaService.getById(this.id).subscribe(retorno => this.pessoa = retorno);
    }
  }

  salvar() {
    this.pessoaService.salvar(this.pessoa);
    this.voltar();
  }

  voltar() {
    this.pessoaService.voltar();
  }
}
