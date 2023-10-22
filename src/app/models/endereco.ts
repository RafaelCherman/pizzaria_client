import { Cliente } from "./cliente";

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
