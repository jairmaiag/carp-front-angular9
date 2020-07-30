import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';

import { PessoaService } from '../../services/pessoa.service'
import { Pessoa } from '../../models/pessoa';
import { Sexo } from '../../../geral/models/sexo';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit, OnDestroy {

  titulo: String = PessoaService.tituloInclusao;
  id: any;
  pessoa: Pessoa = Pessoa.getInstance();
  sexo: Sexo[];
  inscricao$: Subscription;

  constructor(private pessoaService: PessoaService, private activeRouter: ActivatedRoute, private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
    this.sexo = this.pessoaService.getListaSexo();
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('uuid');
    if (this.id != null) {
      this.titulo = `${PessoaService.tituloEdicao}`;
      this.pessoaService.getBUUId(this.id).subscribe(retorno => this.pessoa = retorno);
    }
  }
  ngOnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }
  salvar() {
    console.log(this.pessoa);
    /*
    const retorno = this.pessoaService.salvar(this.pessoa);
    this.inscricao$ = retorno.subscribe(p => this.voltar());
    */
  }

  voltar() {
    this.pessoaService.voltar();
  }
}
