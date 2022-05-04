import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemListComponent } from './components/ordem-list/ordem-list.component'
import { OrdemFormComponent } from './components/ordem-form/ordem-form.component';
import { OrdemViewComponent } from './components/ordem-view/ordem-view.component';

const routes: Routes = [
  { path: '', component: OrdemListComponent },
  { path: 'new', component: OrdemFormComponent },
  { path: ':uuid/view', component: OrdemViewComponent },
  { path: ':uuid/edit', component: OrdemFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemRoutingModule { }
