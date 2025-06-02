import Telefone from '../../src/models/Telefone.js';

describe('Telefone Model', () => {
  it('deve ter método create', () => {
    expect(typeof Telefone.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Telefone.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Telefone.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Telefone.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Telefone.delete).toBe('function');
  });
}); 