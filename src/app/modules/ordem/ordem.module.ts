import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemRoutingModule } from './ordem-routing.module';
import { OrdemListComponent } from './components/ordem-list/ordem-list.component';
import { OrdemFormComponent } from './components/ordem-form/ordem-form.component';
import { OrdemViewComponent } from './components/ordem-view/ordem-view.component';

@NgModule({
  declarations: [OrdemListComponent, OrdemFormComponent, OrdemViewComponent],
  imports: [
    CommonModule,
    OrdemRoutingModule
  ]
})
export class OrdemModule { }
