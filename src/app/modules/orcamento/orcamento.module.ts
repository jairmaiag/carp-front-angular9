import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeralModule } from './../geral/geral.module';
import { OrcamentoService } from './services/orcamento.service';
import { OrcamentoRoutingModule } from './orcamento-routing.module';
import { OrcamentoListComponent } from './components/orcamento-list/orcamento-list.component';
import { OrcamentoFormComponent } from './components/orcamento-form/orcamento-form.component';
import { OrcamentoViewComponent } from './components/orcamento-view/orcamento-view.component';


@NgModule({
  declarations: [
    OrcamentoListComponent,
    OrcamentoFormComponent,
    OrcamentoViewComponent
  ],
  imports: [
    CommonModule,
    OrcamentoRoutingModule,
    GeralModule
  ],
  providers: [OrcamentoService]
})
export class OrcamentoModule { }
