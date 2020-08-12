import { Component, OnInit } from '@angular/core';

/* Exporta o tipo como sendo uma propriedade da interface country ou vazio */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

}
