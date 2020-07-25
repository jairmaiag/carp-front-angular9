import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";;
import { HttpClientModule } from "@angular/common/http";

import { PessoaRoutingModule } from './pessoa-routing.module';
import { GeralModule } from './../geral/geral.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaService } from './services/pessoa.service';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';


@NgModule({
  declarations: [PessoaListComponent, PessoaFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PessoaRoutingModule,
    GeralModule
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
