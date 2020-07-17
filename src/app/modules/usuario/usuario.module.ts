import { Global } from './global';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioViewComponent } from './components/usuario-view/usuario-view.component';

@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListComponent, UsuarioViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuarioRoutingModule
  ],
  providers: [Global]
})
export class UsuarioModule { }
