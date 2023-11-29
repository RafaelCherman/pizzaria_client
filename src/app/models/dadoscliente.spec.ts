// dadoscliente.spec.ts
import { Dadoscliente } from './dadoscliente';
import { Cliente } from './cliente';
import { Usuario } from './usuario';

describe('Dadoscliente', () => {
    it('should create an instance with default values', () => {
        const dadoscliente = new Dadoscliente();
        expect(dadoscliente).toBeTruthy();
        expect(dadoscliente.login).toEqual(jasmine.any(Usuario));
        expect(dadoscliente.cliente).toEqual(jasmine.any(Cliente));
    });

    it('should create an instance with provided values', () => {
        const usuario = new Usuario();
        const cliente = new Cliente();
        const dadoscliente = new Dadoscliente(usuario, cliente);
        expect(dadoscliente).toBeTruthy();
        expect(dadoscliente.login).toEqual(usuario);
        expect(dadoscliente.cliente).toEqual(cliente);
    });
});
