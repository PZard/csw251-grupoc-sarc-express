import Usuario from '../../src/models/Usuario.js';

describe('Usuario Model', () => {
  it('deve ter método create', () => {
    expect(typeof Usuario.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Usuario.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Usuario.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Usuario.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Usuario.delete).toBe('function');
  });
}); 