import Turma from '../../src/models/Turma.js';

describe('Turma Model', () => {
  it('deve ter método create', () => {
    expect(typeof Turma.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Turma.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Turma.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Turma.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Turma.delete).toBe('function');
  });
}); 