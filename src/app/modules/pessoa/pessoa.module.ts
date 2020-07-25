import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { GeralModule } from './../geral/geral.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaService } from './services/pessoa.service';


@NgModule({
  declarations: [PessoaListComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    GeralModule
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
