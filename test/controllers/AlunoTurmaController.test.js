jest.mock('../../src/services/AlunoTurmaService.js', () => ({
  create: jest.fn().mockResolvedValue({
    alunoId: 1,
    turmaId: 1,
  })
}));

import AlunoTurmaService from '../../src/services/AlunoTurmaService.js';
import AlunoTurmaController from '../../src/controllers/AlunoTurmaController.js'; // Supondo que existe um AlunoTurmaController

describe('AlunoTurmaController', () => {
  it('deve criar um aluno turma', async () => {
    const req = { body: { alunoId: 1, turmaId: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await AlunoTurmaController.create(req, res);

    expect(AlunoTurmaService.create).toHaveBeenCalledWith({ alunoId: 1, turmaId: 1 });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ alunoId: 1, turmaId: 1 });
  });
}); 