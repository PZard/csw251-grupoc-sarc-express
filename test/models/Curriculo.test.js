import Curriculo from '../../src/models/Curriculo.js';

describe('Curriculo Model', () => {
  it('deve ter método create', () => {
    expect(typeof Curriculo.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Curriculo.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Curriculo.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Curriculo.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Curriculo.delete).toBe('function');
  });
}); 