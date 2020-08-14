import { Pagina } from './pagina';
export class Paginacao {
    page: Pagina = Pagina.getInstance();
    rows: any[];
    order: any[];
}
