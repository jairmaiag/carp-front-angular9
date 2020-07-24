import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";;
import { HttpClientModule } from "@angular/common/http";

import { GeralModule } from './../geral/geral.module';
import { Global } from './global';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioViewComponent } from './components/usuario-view/usuario-view.component';

@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListComponent, UsuarioViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuarioRoutingModule,
    GeralModule
  ],
  providers: [Global]
})
export class UsuarioModule { }
