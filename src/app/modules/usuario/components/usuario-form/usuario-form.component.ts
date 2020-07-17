import { Usuario } from './../../models/usuario';
import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  id: any;
  tituloComponente: String;
  formulario: FormGroup;
  
  constructor(private global: Global, private usuarioService: UsuarioService, private router: Router, private activeRouter: ActivatedRoute) {
    this.tituloComponente = `${this.global.inclusao}${this.global.titulo}`;
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      id: new FormControl(null),
      login: new FormControl(null),
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      ativo: new FormControl(null)
    });

    this.id = this.activeRouter.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.tituloComponente = `${this.global.alteracao}${this.global.titulo}`;
    } else {
      let usuario = this.usuarioService.getById(this.id);
      console.log(usuario);
    }

  }

  cancelar() {
    this.router.navigateByUrl('/usuario');
  }

  salvar() {
    this.usuarioService.salvar(this.formulario.value);
    this.router.navigateByUrl('/usuario');
  }

}
