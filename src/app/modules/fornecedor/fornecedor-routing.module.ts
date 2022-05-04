import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorListComponent } from './components/fornecedor-list/fornecedor-list.component'
import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';
import { FornecedorViewComponent } from './components/fornecedor-view/fornecedor-view.component';

const routes: Routes = [
  { path: '', component: FornecedorListComponent },
  { path: 'new', component: FornecedorFormComponent },
  { path: ':uuid/view', component: FornecedorViewComponent },
  { path: ':uuid/edit', component: FornecedorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
