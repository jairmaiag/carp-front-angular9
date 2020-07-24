import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Constantes } from './services/constantes.service';
import { ModalComponent } from './components/modal/modal.component';
import { BotaoComponent } from './components/botao/botao.component';
import { TituloTelaComponent } from './components/titulo-tela/titulo-tela.component';
import { BotaoFecharComponent } from './components/botao-fechar/botao-fechar.component';
import { BotaoNovoComponent } from './components/botao-novo/botao-novo.component';
import { BotaoSalvarComponent } from './components/botao-salvar/botao-salvar.component';
import { BotaoCancelarComponent } from './components/botao-cancelar/botao-cancelar.component';
import { TelaComponent } from './components/tela/tela.component';
import { BotaoDetalharComponent } from './components/botao-detalhar/botao-detalhar.component';
import { BotaoEditarComponent } from './components/botao-editar/botao-editar.component';

@NgModule({
  declarations: [
    ModalComponent,
    BotaoComponent,
    TituloTelaComponent,
    BotaoFecharComponent,
    BotaoNovoComponent,
    BotaoEditarComponent,
    BotaoSalvarComponent,
    BotaoCancelarComponent,
    BotaoDetalharComponent,
    TelaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    BotaoComponent,
    TituloTelaComponent,
    BotaoFecharComponent,
    BotaoNovoComponent,
    BotaoEditarComponent,
    BotaoSalvarComponent,
    BotaoCancelarComponent,
    BotaoDetalharComponent,
    TelaComponent
  ],
  providers: [Constantes]
})
export class GeralModule { }
