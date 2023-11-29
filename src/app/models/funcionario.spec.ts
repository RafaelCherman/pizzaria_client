import { Funcionario } from './funcionario';

describe('Funcionario', () => {
  it('should create an instance of Funcionario', () => {
    const funcionario = new Funcionario(1, 'Nome do Funcionário', '123.456.789-09', 'Cargo');
    expect(funcionario).toBeTruthy();
  });

  it('should have properties id, nome, cpf, and funcao', () => {
    const funcionario = new Funcionario(1, 'Nome do Funcionário', '123.456.789-09', 'Cargo');
    expect(funcionario.id).toBeDefined();
    expect(funcionario.nome).toBeDefined();
    expect(funcionario.cpf).toBeDefined();
    expect(funcionario.funcao).toBeDefined();
  });

  it('should set properties correctly', () => {
    const funcionario = new Funcionario(1, 'Nome do Funcionário', '123.456.789-09', 'Cargo');
    expect(funcionario.id).toEqual(1);
    expect(funcionario.nome).toEqual('Nome do Funcionário');
    expect(funcionario.cpf).toEqual('123.456.789-09');
    expect(funcionario.funcao).toEqual('Cargo');
  });
});
