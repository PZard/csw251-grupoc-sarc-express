jest.mock('../../src/services/AulaService.js', () => ({
  create: jest.fn().mockResolvedValue({
    nome: 'Aula de Teste',
    data: '2023-01-01',
  })
}));

import AulaService from '../../src/services/AulaService.js';
import AulaController from '../../src/controllers/AulaController.js'; // Supondo que existe um AulaController

describe('AulaController', () => {
  it('deve criar uma aula', async () => {
    const req = { body: { nome: 'Aula de Teste', data: '2023-01-01' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await AulaController.create(req, res);

    expect(AulaService.create).toHaveBeenCalledWith({ nome: 'Aula de Teste', data: '2023-01-01' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ nome: 'Aula de Teste', data: '2023-01-01' });
  });
}); 