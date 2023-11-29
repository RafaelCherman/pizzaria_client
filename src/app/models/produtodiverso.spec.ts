import { Produtodiverso } from './produtodiverso';

describe('Produtodiverso', () => {
  it('should create an instance of Produtodiverso', () => {
    const produtodiverso = new Produtodiverso();
    expect(produtodiverso).toBeTruthy();
  });

  it('should have properties id, nome, tipo, and preco', () => {
    const produtodiverso = new Produtodiverso();
    expect(produtodiverso.id).toBeDefined();
    expect(produtodiverso.nome).toBeDefined();
    expect(produtodiverso.tipo).toBeDefined();
    expect(produtodiverso.preco).toBeDefined();
  });

  it('should create an instance with provided values', () => {
    const produtodiverso = new Produtodiverso(1, 'Produto1', 'Tipo1', 10.0);
    expect(produtodiverso.id).toBe(1);
    expect(produtodiverso.nome).toBe('Produto1');
    expect(produtodiverso.tipo).toBe('Tipo1');
    expect(produtodiverso.preco).toBe(10.0);
  });
});
