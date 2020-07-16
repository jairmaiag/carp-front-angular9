import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  tituloComponente = "Listagem de Usuário";
  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigateByUrl('/');
  }
  novo() {
    this.router.navigateByUrl('/usuario/new');
  }
  editar(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${id}/edit`);
  }
  visualizar(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`/usuario/${id}/view`);
  }
  excluir(id: any) {
    if (!id) {
      return;
    }
    this.router.navigateByUrl('/usuario');
  }
}
