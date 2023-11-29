/*import { Cliente } from "./cliente";
import { Usuario } from "./usuario";

export class Dadoscliente {

    login!: Usuario;
    cliente!: Cliente;
    
}
*/

import { Cliente } from './cliente';
import { Usuario } from './usuario';

export class Dadoscliente {
    login: Usuario;
    cliente: Cliente;

    constructor(login: Usuario = new Usuario(), cliente: Cliente = new Cliente()) {
        this.login = login;
        this.cliente = cliente;
    }
}
