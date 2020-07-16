import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Global } from './../../global';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  id: any;
  tituloForm: String;
  global: Global;
  
  constructor(global: Global, private activeRouter: ActivatedRoute) {
    this.global = global;
    this.tituloForm = `${this.global.inclusao}${this.global.modulo}`;
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.tituloForm = `${this.global.alteracao}${this.global.modulo}`;
    }
  }

}
