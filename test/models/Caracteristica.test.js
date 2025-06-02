import Caracteristica from '../../src/models/Caracteristica.js';

describe('Caracteristica Model', () => {
  it('deve ter método create', () => {
    expect(typeof Caracteristica.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Caracteristica.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Caracteristica.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Caracteristica.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Caracteristica.delete).toBe('function');
  });
}); 