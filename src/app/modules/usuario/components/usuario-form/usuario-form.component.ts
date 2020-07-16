import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  id: any;
  tituloComponente: String;
  formulario: FormGroup;

  constructor(private global: Global, private router: Router, private activeRouter: ActivatedRoute) {
    this.tituloComponente = `${this.global.inclusao}${this.global.titulo}`;
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.tituloComponente = `${this.global.alteracao}${this.global.titulo}`;
    }

  }

  cancelar() {
    this.router.navigateByUrl('/usuario');
  }

}
