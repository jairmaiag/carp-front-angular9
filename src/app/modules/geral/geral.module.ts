import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { BotaoComponent } from './components/botao/botao.component';
import { AcaoComponent } from './components/acao/acao.component';
import { TituloTelaComponent } from './components/titulo-tela/titulo-tela.component';

@NgModule({
  declarations: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent]
})
export class GeralModule { }
