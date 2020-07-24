import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { BotaoComponent } from './components/botao/botao.component';
import { AcaoComponent } from './components/acao/acao.component';
import { TituloTelaComponent } from './components/titulo-tela/titulo-tela.component';
import { BotaoFecharComponent } from './components/botao-fechar/botao-fechar.component';
import { BotaoNovoComponent } from './components/botao-novo/botao-novo.component';
import { BotaoSalvarComponent } from './components/botao-salvar/botao-salvar.component';

@NgModule({
  declarations: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent, BotaoFecharComponent, BotaoNovoComponent, BotaoSalvarComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent, BotaoFecharComponent, BotaoNovoComponent, BotaoSalvarComponent]
})
export class GeralModule { }
