export interface ItemMenu {
    id: number;
    texto: string;
    link: string;
    subIntens: Array<ItemMenu>;
}
