import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListComponent } from './components/cliente-list/cliente-list.component'
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteViewComponent } from './components/cliente-view/cliente-view.component';

const routes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'new', component: ClienteFormComponent },
  { path: ':uuid/view', component: ClienteViewComponent },
  { path: ':uuid/edit', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
