import { Pizzatipo } from './pizzatipo';

describe('Pizzatipo', () => {
  let pizzatipo: Pizzatipo;

  beforeEach(() => {
    pizzatipo = new Pizzatipo();
  });

  it('should create an instance', () => {
    expect(pizzatipo).toBeTruthy();
  });

  it('should have properties id, nome, tamanho, valor, and qntSabores', () => {
    expect(pizzatipo.id).toBeDefined();
    expect(pizzatipo.nome).toBeDefined();
    expect(pizzatipo.tamanho).toBeDefined();
    expect(pizzatipo.valor).toBeDefined();
    expect(pizzatipo.qntSabores).toBeDefined();
  });

  it('should set and get properties correctly', () => {
    pizzatipo.id = 1;
    pizzatipo.nome = 'Calabresa';
    pizzatipo.tamanho = 'Grande';
    pizzatipo.valor = 30.0;
    pizzatipo.qntSabores = 2;

    expect(pizzatipo.id).toEqual(1);
    expect(pizzatipo.nome).toEqual('Calabresa');
    expect(pizzatipo.tamanho).toEqual('Grande');
    expect(pizzatipo.valor).toEqual(30.0);
    expect(pizzatipo.qntSabores).toEqual(2);
  });
});
