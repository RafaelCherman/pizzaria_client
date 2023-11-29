import { Sabor } from './sabor';

describe('Sabor', () => {
  it('should create an instance of Sabor', () => {
    const sabor = new Sabor(1, 'Calabresa', 'Calabresa, cebola, molho de tomate', 20.0);
    expect(sabor).toBeTruthy();
  });

  it('should have properties id, nome, ingredientes, and valor', () => {
    const sabor = new Sabor(1, 'Calabresa', 'Calabresa, cebola, molho de tomate', 20.0);
    expect(sabor.id).toBeDefined();
    expect(sabor.nome).toBeDefined();
    expect(sabor.ingredientes).toBeDefined();
    expect(sabor.valor).toBeDefined();
  });
});
