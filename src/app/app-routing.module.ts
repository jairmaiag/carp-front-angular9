import { HomeComponent } from './components/home/home.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AcessoComponent },
  { path: 'ordemservico', loadChildren: () => import('./modules/ordem/ordem.module').then(m => m.OrdemModule) },
  { path: 'pessoa', loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'cliente', loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'funcionario', loadChildren: () => import('./modules/funcionario/funcionario.module').then(m => m.FuncionarioModule) },
  { path: 'fornecedor', loadChildren: () => import('./modules/fornecedor/fornecedor.module').then(m => m.FornecedorModule) },
  { path: 'produto', loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule) },
  { path: 'usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'orcamento', loadChildren: () => import('./modules/orcamento/orcamento.module').then(m => m.OrcamentoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
