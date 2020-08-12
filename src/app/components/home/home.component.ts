import { ColunaOrdenada } from './../../modules/geral/directives/colunaOrdenada';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, OnInit } from '@angular/core';
import { EventoOrdenacao } from '../../modules/geral/directives/eventoOrdenacao';
import { CabecalhoOrdenacaoDirective } from './../../modules/geral/directives/cabecalho-ordenacao.directive';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

/* Exporta o tipo como sendo uma propriedade da interface country ou vazio */
export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
/* Cria uma diretiva aplicada somente nos elementos th com a directivia sortable */
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries = COUNTRIES;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChildren(CabecalhoOrdenacaoDirective) cabecalhos: QueryList<CabecalhoOrdenacaoDirective>;

  constructor() { }

  ngOnInit(): void {  }

  onOrdem({ coluna, direcao }: EventoOrdenacao) {
    this.cabecalhos.forEach(tituloColuna => {
      if (tituloColuna.coluna !== coluna) {
        tituloColuna.direcao = '';
      }
    });

    // sorting countries
    if (direcao === '' || coluna === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = CabecalhoOrdenacaoDirective.comparar(a[coluna], b[coluna]);
        return direcao === 'asc' ? res : -res;
      });
    }
  }
  onSort({ column, direction }: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      //console.log(header);
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
