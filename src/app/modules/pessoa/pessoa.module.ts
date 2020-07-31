import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";;
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
    NgbModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    PessoaRoutingModule,
    GeralModule
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
