import { Cliente } from './cliente';

describe('Cliente', () => {
  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente();
  });

  it('should create an instance of Cliente', () => {
    expect(cliente).toBeTruthy();
  });

  it('should have properties id, nome, telCelular, and cpf', () => {
    expect(cliente.id).toBeDefined();
    expect(cliente.nome).toBeDefined();
    expect(cliente.telCelular).toBeDefined();
    expect(cliente.cpf).toBeDefined();
  });

  it('should set properties correctly', () => {
    cliente.id = 1;
    cliente.nome = 'John Doe';
    cliente.telCelular = '123456789';
    cliente.cpf = '123.456.789-09';

    expect(cliente.id).toEqual(1);
    expect(cliente.nome).toEqual('John Doe');
    expect(cliente.telCelular).toEqual('123456789');
    expect(cliente.cpf).toEqual('123.456.789-09');
  });
});
