import Conteudo from '../../src/models/Conteudo.js';

describe('Conteudo Model', () => {
  it('deve ter método create', () => {
    expect(typeof Conteudo.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Conteudo.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Conteudo.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Conteudo.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Conteudo.delete).toBe('function');
  });
}); 