import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orcamento-list',
  templateUrl: './orcamento-list.component.html',
  styleUrls: ['./orcamento-list.component.css']
})
export class OrcamentoListComponent implements OnInit {

  titulo: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.titulo = 'Listagem de orçamento'
  }
  novo() {
    this.router.navigate(['/']);
  }
  fechar() {
    this.router.navigate(['/']);
  }
}
