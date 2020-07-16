import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoViewComponent } from './components/produto-view/produto-view.component';
import { ProdutoListagemComponent } from './components/produto-listagem/produto-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProdutoListagemComponent },
  { path: 'new', component: ProdutoFormComponent },
  { path: ':id/view', component: ProdutoViewComponent },
  { path: ':id/edit', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
