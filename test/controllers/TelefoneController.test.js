jest.mock('../../src/services/TelefoneService.js', () => ({
  create: jest.fn().mockResolvedValue({
    numero: '123456789',
  })
}));

import TelefoneService from '../../src/services/TelefoneService.js';
import TelefoneController from '../../src/controllers/TelefoneController.js'; // Supondo que existe um TelefoneController

describe('TelefoneController', () => {
  it('deve criar um telefone', async () => {
    const req = { body: { numero: '123456789' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await TelefoneController.create(req, res);

    expect(TelefoneService.create).toHaveBeenCalledWith({ numero: '123456789' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ numero: '123456789' });
  });
}); 