import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Global } from './../../global';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {
  id: any;
  tituloForm: String;
  global: Global;
  constructor(global: Global, private activeRouter: ActivatedRoute) {
    this.global = global;
    this.tituloForm = `${this.global.detalhe}${this.global.modulo}`;
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
  }

}
