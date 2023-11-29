/*export class Funcionario {
  id!: number;
  nome!: string;
  cpf!: String;
  funcao!: string;
}

*/
// funcionario.ts
export class Funcionario {
  id: number;
  nome: string;
  cpf: string;
  funcao: string;

  constructor(
      id: number = 0,
      nome: string = '',
      cpf: string = '',
      funcao: string = ''
  ) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.funcao = funcao;
  }
}
