/*export class Pizzatipo {

    id!: number;
    nome!: string;
    tamanho!: string;
    valor!: number;
    qntSabores!: number;
}
*/

export class Pizzatipo {
    id!: number;
    nome!: string;
    tamanho!: string;
    valor!: number;
    qntSabores!: number;
  
    constructor(id: number = 0, nome: string = '', tamanho: string = '', valor: number = 0, qntSabores: number = 0) {
      this.id = id;
      this.nome = nome;
      this.tamanho = tamanho;
      this.valor = valor;
      this.qntSabores = qntSabores;
    }
  }
  