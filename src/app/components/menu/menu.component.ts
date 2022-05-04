import { ItemMenu } from './../../models/item-menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private itensMenu: Array<ItemMenu>;

  constructor(private menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.itensMenu = this.menuService.getMenu();
    /*
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        const $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
    */
  }
  getItensMenu(): Array<ItemMenu> {
    return this.itensMenu;
  }
}