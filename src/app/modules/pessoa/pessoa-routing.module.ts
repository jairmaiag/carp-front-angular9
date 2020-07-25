import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

const routes: Routes = [
  { path: '', component: PessoaListComponent },
  { path: 'new', component: PessoaFormComponent },
  { path: ':uuid/edit', component: PessoaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
