import { Pizza } from './pizza';
import { Pizzatipo } from './pizzatipo';
import { Sabor } from './sabor';

describe('Pizza', () => {
  let pizza: Pizza;

  beforeEach(() => {
    // Inicializa uma nova instância de Pizza antes de cada teste
    pizza = new Pizza();
  });

  it('should create an instance of Pizza', () => {
    // Verifica se a instância de Pizza foi criada com sucesso
    expect(pizza).toBeTruthy();
  });

  it('should have properties id, tipo, sabor, and valorPizza', () => {
    // Verifica se as propriedades necessárias estão definidas
    expect(pizza.id).toBeDefined();
    expect(pizza.tipo).toBeDefined();
    expect(pizza.sabor).toBeDefined();
    expect(pizza.valorPizza).toBeDefined();
  });

  it('should set and get values correctly', () => {
    // Define valores para as propriedades
    pizza.id = 1;
    pizza.tipo = new Pizzatipo();
    pizza.sabor = [new Sabor()];
    pizza.valorPizza = 15.0;

    // Verifica se os valores foram definidos corretamente
    expect(pizza.id).toEqual(1);
    expect(pizza.tipo instanceof Pizzatipo).toBe(true);
    expect(Array.isArray(pizza.sabor)).toBe(true);
    expect(pizza.sabor.length).toEqual(1);
    expect(pizza.valorPizza).toEqual(15.0);
  });
});
