import { Endereco } from './endereco';
import { Cliente } from './cliente';

describe('Endereco', () => {
  let endereco: Endereco;

  beforeEach(() => {
    endereco = new Endereco();
  });

  it('should create an instance of Endereco', () => {
    expect(endereco).toBeTruthy();
  });

  it('should have properties id, telResidencia, rua, nuEndereco, bairro, cep, complemento, and cliente', () => {
    expect(endereco.id).toBeDefined();
    expect(endereco.telResidencia).toBeDefined();
    expect(endereco.rua).toBeDefined();
    expect(endereco.nuEndereco).toBeDefined();
    expect(endereco.bairro).toBeDefined();
    expect(endereco.cep).toBeDefined();
    expect(endereco.complemento).toBeDefined();
    expect(endereco.cliente).toBeDefined();
  });

  it('should initialize cliente as an instance of Cliente', () => {
    expect(endereco.cliente).toBeInstanceOf(Cliente);
  });
});
