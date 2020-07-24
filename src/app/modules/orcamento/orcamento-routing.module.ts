import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoListComponent } from './components/orcamento-list/orcamento-list.component';
import { OrcamentoFormComponent } from './components/orcamento-form/orcamento-form.component';
import { OrcamentoViewComponent } from './components/orcamento-view/orcamento-view.component';

const routes: Routes = [
  { path: '', component: OrcamentoListComponent },
  { path: 'new', component: OrcamentoFormComponent },
  { path: ':uuid/view', component: OrcamentoViewComponent },
  { path: ':uuid/edit', component: OrcamentoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule { }
