import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Global } from './global';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListagemComponent } from './components/produto-listagem/produto-listagem.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoViewComponent } from './components/produto-view/produto-view.component';


@NgModule({
  declarations: [ProdutoListagemComponent, ProdutoFormComponent, ProdutoViewComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [Global]
})
export class ProdutoModule { }
