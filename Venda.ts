import { Produto } from './Produto';

export class Venda {
    produto: Produto;
    qtd: number;
    lucro: number;
    timestamp: Date;
}