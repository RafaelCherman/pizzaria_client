/*import { Cliente } from "./cliente";

export class Endereco {

    id!: number;
    telResidencia!: string;
    rua!: string;
    nuEndereco!: number;
    bairro!: string;
    cep!: string;
    complemento!: string;
    cliente!: Cliente;
}
*/

import { Cliente } from './cliente';

export class Endereco {
  id!: number;
  telResidencia!: string;
  rua!: string;
  nuEndereco!: number;
  bairro!: string;
  cep!: string;
  complemento!: string;
  cliente!: Cliente;

  constructor(
    id: number = 0,
    telResidencia: string = '',
    rua: string = '',
    nuEndereco: number = 0,
    bairro: string = '',
    cep: string = '',
    complemento: string = '',
    cliente: Cliente = new Cliente()
  ) {
    this.id = id;
    this.telResidencia = telResidencia;
    this.rua = rua;
    this.nuEndereco = nuEndereco;
    this.bairro = bairro;
    this.cep = cep;
    this.complemento = complemento;
    this.cliente = cliente;
  }
}
