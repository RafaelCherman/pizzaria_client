/*export class Produtodiverso {

    id!: number;
    nome!: string;
    tipo!: string;
    preco!: number;
}
*/
export class Produtodiverso {
    id!: number;
    nome!: string;
    tipo!: string;
    preco!: number;
  
    constructor(id: number = 0, nome: string = '', tipo: string = '', preco: number = 0) {
      this.id = id;
      this.nome = nome;
      this.tipo = tipo;
      this.preco = preco;
    }
  }
  