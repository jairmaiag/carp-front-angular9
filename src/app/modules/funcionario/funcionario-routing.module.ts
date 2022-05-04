import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component'
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioViewComponent } from './components/funcionario-view/funcionario-view.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },
  { path: 'new', component: FuncionarioFormComponent },
  { path: ':uuid/view', component: FuncionarioViewComponent },
  { path: ':uuid/edit', component: FuncionarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
