import { Produto } from './Produto'

export class Inventario {
    produtos: Produto[];

    constructor(){
        this.produtos = [];
    }

    addProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    getProdutoByID(id: number): Produto | undefined {
        return this.produtos.find((produto) => produto.id === id);
    }

    atualizarProduto(produto: Produto) {
        const index = this.produtos.findIndex((p) => p.id === produto.id);
        if (index !== -1) {
            this.produtos[index] = produto;
        }
    }
}