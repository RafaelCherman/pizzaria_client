/*export class Sabor {

    id!: number;
    nome!: string;
    ingredientes!: string;
    valor!: number;
}*/
// sabor.ts
export class Sabor {
    id!: number;
    nome!: string;
    ingredientes!: string;
    valor!: number;

    constructor(
        id: number = 0,
        nome: string = '',
        ingredientes: string = '',
        valor: number = 0
    ) {
        this.id = id;
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.valor = valor;
    }
}
