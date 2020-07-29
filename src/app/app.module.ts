import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { GeralModule } from './modules/geral/geral.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { ModalComponent } from './components/geral/modal/modal.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AcessoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    GeralModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  exports: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
