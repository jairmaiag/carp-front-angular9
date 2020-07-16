import { Injectable } from '@angular/core';
import { ItemMenu } from '../models/item-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenu(): Array<ItemMenu> {
    let itnesTabela: Array<ItemMenu> = [
      { id: 1, texto: "Usuário", link: "/usuario", subIntens: null },
      { id: 2, texto: "Funcionário", link: "/funcionario", subIntens: null },
      { id: 3, texto: "Cliente", link: "/cliente", subIntens: null },
      { id: 4, texto: "Fornecedor", link: "/fornecedor", subIntens: null },
      { id: 5, texto: "Produto", link: "/produto", subIntens: null },
    ];

    let itemTabela = {
      id: 4,
      texto: "Tabelas",
      link: "#",
      subIntens: itnesTabela,
    };
    let itensMenu: Array<ItemMenu> = [
      { id: 1, texto: "Home", link: "/", subIntens: null },
      { id: 2, texto: "Orçamento", link: "/orcamento", subIntens: null },
      {
        id: 3,
        texto: "Ordem",
        link: "/ordemservico",
        subIntens: null,
      },
      itemTabela,
      { id: 5, texto: "Login", link: "/login", subIntens: null },
    ];
    return itensMenu;
  }
}
