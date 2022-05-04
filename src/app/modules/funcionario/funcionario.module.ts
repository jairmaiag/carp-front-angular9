import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioViewComponent } from './components/funcionario-view/funcionario-view.component';


@NgModule({
  declarations: [FuncionarioListComponent, FuncionarioFormComponent, FuncionarioViewComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
