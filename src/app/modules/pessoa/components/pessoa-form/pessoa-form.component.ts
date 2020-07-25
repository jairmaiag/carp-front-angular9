import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
  inscricao$: Subscription;

  constructor(private pessoaService: PessoaService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('uuid');
    if (this.id != null) {
      this.titulo = `${PessoaService.tituloEdicao}`;
      this.pessoaService.getBUUId(this.id).subscribe(retorno => this.pessoa = retorno);
    }
  }
  OnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }
  salvar() {
    const retorno = this.pessoaService.salvar(this.pessoa);
    this.inscricao$ = retorno.subscribe(console.log);
    this.voltar();
  }

  voltar() {
    this.pessoaService.voltar();
  }
}
