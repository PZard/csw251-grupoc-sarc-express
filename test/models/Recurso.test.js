import Recurso from '../../src/models/Recurso.js';

describe('Recurso Model', () => {
  it('deve ter método create', () => {
    expect(typeof Recurso.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Recurso.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Recurso.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Recurso.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Recurso.delete).toBe('function');
  });
}); 