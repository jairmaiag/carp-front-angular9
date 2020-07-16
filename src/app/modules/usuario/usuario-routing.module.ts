import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioViewComponent } from './components/usuario-view/usuario-view.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

const routes: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: 'new', component: UsuarioFormComponent },
  { path: ':id/view', component: UsuarioViewComponent },
  { path: ':id/edit', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
