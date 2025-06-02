import AlunoTurma from '../../src/models/AlunoTurma.js';

describe('AlunoTurma Model', () => {
  it('deve ter método create', () => {
    expect(typeof AlunoTurma.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof AlunoTurma.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof AlunoTurma.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof AlunoTurma.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof AlunoTurma.delete).toBe('function');
  });
}); 