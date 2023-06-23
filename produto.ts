//classes de domínio
export class Produto {
    id: number;
    nome: string;
    // ? = propriedade cor e tamanho pode ser undefined
    cor?: string;
    tamanho?: string;
}