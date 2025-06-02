jest.mock('../../src/services/RecursoService.js', () => ({
  create: jest.fn().mockResolvedValue({
    nome: 'Recurso de Teste',
  })
}));

import RecursoService from '../../src/services/RecursoService.js';
import RecursoController from '../../src/controllers/RecursoController.js'; // Supondo que existe um RecursoController

describe('RecursoController', () => {
  it('deve criar um recurso', async () => {
    const req = { body: { nome: 'Recurso de Teste' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await RecursoController.create(req, res);

    expect(RecursoService.create).toHaveBeenCalledWith({ nome: 'Recurso de Teste' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ nome: 'Recurso de Teste' });
  });
}); 