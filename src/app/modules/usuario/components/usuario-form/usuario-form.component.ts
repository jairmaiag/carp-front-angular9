import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Usuario } from './../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit, OnDestroy {
  titulo: string = UsuarioService.tituloInclusao;
  id: any;
  usuario: Usuario = Usuario.getInstance();
  inscricao$: Subscription;

  constructor(private usuarioService: UsuarioService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('uuid');
    if (this.id != null) {
      this.titulo = `${UsuarioService.tituloEdicao}`;
      this.buscarUsuario(this.id);
    }
  }
  ngOnDestroy(): void {
    if (this.inscricao$) {
      this.inscricao$.unsubscribe();
    }
  }
  buscarUsuario(id: any) {
    if (this.id != null) {
      this.usuarioService.getByUUId(this.id).subscribe(retorno => this.usuario = retorno);
    }
  }

  voltar() {
    this.usuarioService.voltar();
  }

  salvar() {
    console.log(this.usuario);
    // this.usuarioService.salvar(this.usuario).subscribe(usuario => this.usuario = usuario);
  }

}
