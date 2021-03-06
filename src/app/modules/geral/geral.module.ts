import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

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
import { BotaoSimComponent } from './components/botao-sim/botao-sim.component';
import { BotaoNaoComponent } from './components/botao-nao/botao-nao.component';
import { BotaoExcluirComponent } from './components/botao-excluir/botao-excluir.component';
import { BotoesAcaoComponent } from './components/botoes-acao/botoes-acao.component';
import { ModalSimnaoComponent } from './components/modal-simnao/modal-simnao.component';
import { SimNaoPipe } from './components/sim-nao.pipe';
import { CabecalhoOrdenacaoDirective } from './directives/cabecalho-ordenacao.directive';

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
    BotaoSimComponent,
    BotaoNaoComponent,
    BotaoExcluirComponent,
    TelaComponent,
    BotoesAcaoComponent,
    ModalSimnaoComponent,
    SimNaoPipe,
    CabecalhoOrdenacaoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
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
    BotaoSimComponent,
    BotaoNaoComponent,
    BotaoExcluirComponent,
    BotoesAcaoComponent,
    TelaComponent,
    ModalSimnaoComponent,
    SimNaoPipe,
    CabecalhoOrdenacaoDirective
  ],
  providers: [Constantes]
})
export class GeralModule { }
