jest.mock('../../src/services/CaracteristicaService.js', () => ({
  create: jest.fn().mockResolvedValue({
    descricao: 'Caracteristica de Teste',
  })
}));

import CaracteristicaService from '../../src/services/CaracteristicaService.js';
import CaracteristicaController from '../../src/controllers/CaracteristicaController.js'; // Supondo que existe um CaracteristicaController

describe('CaracteristicaController', () => {
  it('deve criar uma caracteristica', async () => {
    const req = { body: { descricao: 'Caracteristica de Teste' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await CaracteristicaController.create(req, res);

    expect(CaracteristicaService.create).toHaveBeenCalledWith({ descricao: 'Caracteristica de Teste' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ descricao: 'Caracteristica de Teste' });
  });
}); 