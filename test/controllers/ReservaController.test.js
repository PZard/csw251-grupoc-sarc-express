jest.mock('../../src/services/ReservaService.js', () => ({
  create: jest.fn().mockResolvedValue({
    descricao: 'Reserva de Teste',
  })
}));

import ReservaService from '../../src/services/ReservaService.js';
import ReservaController from '../../src/controllers/ReservaController.js'; // Supondo que existe um ReservaController

describe('ReservaController', () => {
  it('deve criar uma reserva', async () => {
    const req = { body: { descricao: 'Reserva de Teste' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await ReservaController.create(req, res);

    expect(ReservaService.create).toHaveBeenCalledWith({ descricao: 'Reserva de Teste' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ descricao: 'Reserva de Teste' });
  });
}); 