import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { BotaoComponent } from './components/botao/botao.component';
import { AcaoComponent } from './components/acao/acao.component';
import { TituloTelaComponent } from './components/titulo-tela/titulo-tela.component';
import { BotaoFecharComponent } from './components/botao-fechar/botao-fechar.component';
import { BotaoNovoComponent } from './components/botao-novo/botao-novo.component';
import { BotaoSalvarComponent } from './components/botao-salvar/botao-salvar.component';
import { BotaoCancelarComponent } from './components/botao-cancelar/botao-cancelar.component';

@NgModule({
  declarations: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent, BotaoFecharComponent, BotaoNovoComponent, BotaoSalvarComponent, BotaoCancelarComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, BotaoComponent, AcaoComponent, TituloTelaComponent, BotaoFecharComponent, BotaoNovoComponent, BotaoSalvarComponent, BotaoCancelarComponent]
})
export class GeralModule { }
