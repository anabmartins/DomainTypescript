import { Produto } from './Produto';

export class Inventario {
    produtos: Produto[];

    constructor(){
        // inicializa com array vazio
        this.produtos = [];
    }

// adicionar um produto ao inventário
    addProduto(produto: Produto) {
        this.produtos.push(produto);
    }
 
// obter um produto do inventário com base em seu ID
    getProdutoByID(id: number): Produto | undefined {
        return this.produtos.find((produto) => produto.id === id);
        // retorna o produto encontrado ou undefined
    }

    atualizarProduto(produto: Produto) {
        // encontrar o índice do produto com base no seu ID
        const index = this.produtos.findIndex((p) => p.id === produto.id);
        if (index !== -1) {
            this.produtos[index] = produto;
        }
    }

    alertaProduto(produto: Produto):boolean {
        const estoque = this.getProdutoByID(produto);
        return estoque != undefined && estoque.qtd < estoque.qtd;
    }
}