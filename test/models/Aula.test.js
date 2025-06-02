import Aula from '../../src/models/Aula.js';

describe('Aula Model', () => {
  it('deve ter método create', () => {
    expect(typeof Aula.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Aula.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Aula.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Aula.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Aula.delete).toBe('function');
  });
}); 