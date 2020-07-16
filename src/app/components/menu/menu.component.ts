import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        const $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
  }

}
