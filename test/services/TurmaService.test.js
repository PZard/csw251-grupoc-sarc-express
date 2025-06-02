import TurmaService from '../../src/services/TurmaService.js';
import Turma from '../../src/models/Turma.js';

jest.mock('../../src/models/Turma.js');

describe('TurmaService', () => {
  it('deve criar uma turma', async () => {
    Turma.create.mockResolvedValue({ nome: 'Turma de Teste' });
    const result = await TurmaService.create({ nome: 'Turma de Teste' });
    expect(result).toEqual({ nome: 'Turma de Teste' });
  });
}); 