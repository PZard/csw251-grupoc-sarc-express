import AlunoTurmaService from '../../src/services/AlunoTurmaService.js';
import AlunoTurma from '../../src/models/AlunoTurma.js';

jest.mock('../../src/models/AlunoTurma.js');

describe('AlunoTurmaService', () => {
  it('deve criar um aluno turma', async () => {
    AlunoTurma.create.mockResolvedValue({ alunoId: 1, turmaId: 1 });
    const result = await AlunoTurmaService.create({ alunoId: 1, turmaId: 1 });
    expect(result).toEqual({ alunoId: 1, turmaId: 1 });
  });
}); 