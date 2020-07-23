import { Pessoa } from './../../../../models/pessoa';
import { Usuario } from './../../models/usuario';
import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  id: any;
  tituloComponente: String;
  usuario: Usuario = new Usuario();
  pessoa: Pessoa = new Pessoa();

  constructor(private global: Global, private usuarioService: UsuarioService, private router: Router, private activeRouter: ActivatedRoute) {
    this.tituloComponente = `${this.global.inclusao}${this.global.titulo}`;
  }

  ngOnInit(): void {
    //this.pessoa.nome = "";
    this.usuario.Pessoa = this.pessoa;
    console.log(this.usuario);
    this.id = this.activeRouter.snapshot.paramMap.get('uuid');
    this.buscarUsuario(this.id);
    console.log(this.usuario);
    if (this.id != null) {
      this.tituloComponente = `${this.global.alteracao}${this.global.titulo}`;
    }
  }

  buscarUsuario(id: any) {
    if (this.id != null) {
      let usuario = this.usuarioService.getByUUId(this.id);
      usuario.subscribe(usuario => {
        this.usuario = usuario;
        this.pessoa = usuario.Pessoa;
        this.usuario.Pessoa = this.pessoa;
        console.log(this.usuario);
      });
    } else {
      this.usuario.Pessoa = this.pessoa;
    }
  }


  cancelar() {
    this.router.navigate([`/${Global.modulo}`]);
    //this.router.navigateByUrl(`/${Global.modulo}`);
  }

  salvar() {
    this.usuarioService.salvar(this.usuario).subscribe(usuario => this.usuario = usuario);
    this.router.navigateByUrl(`/${Global.modulo}`);
  }

}
