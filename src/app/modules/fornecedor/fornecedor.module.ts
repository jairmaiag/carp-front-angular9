import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorListComponent } from './components/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';
import { FornecedorViewComponent } from './components/fornecedor-view/fornecedor-view.component';


@NgModule({
  declarations: [FornecedorListComponent, FornecedorFormComponent, FornecedorViewComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ]
})
export class FornecedorModule { }
