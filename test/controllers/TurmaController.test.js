jest.mock('../../src/services/TurmaService.js', () => ({
  create: jest.fn().mockResolvedValue({
    nome: 'Turma de Teste',
    semestre: '2023/1',
  })
}));

import TurmaService from '../../src/services/TurmaService.js';
import TurmaController from '../../src/controllers/TurmaController.js';

describe('TurmaController', () => {
  it('deve criar uma turma', async () => {
    const req = { body: { disciplinaCod: 'DISC123', semestre: '2023/1', professorEmail: 'professor@teste.com', horario: '08:00-10:00', vagas: 30 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await TurmaController.create(req, res);
    expect(TurmaService.create).toHaveBeenCalledWith({ disciplinaCod: 'DISC123', semestre: '2023/1', professorEmail: 'professor@teste.com', horario: '08:00-10:00', vagas: 30 });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ nome: 'Turma de Teste', semestre: '2023/1' }));
  });
}); 