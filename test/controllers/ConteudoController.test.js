jest.mock('../../src/services/ConteudoService.js', () => ({
  create: jest.fn().mockResolvedValue({
    titulo: 'Conteudo de Teste',
  })
}));

import ConteudoService from '../../src/services/ConteudoService.js';
import ConteudoController from '../../src/controllers/ConteudoController.js'; // Supondo que existe um ConteudoController

describe('ConteudoController', () => {
  it('deve criar um conteudo', async () => {
    const req = { body: { titulo: 'Conteudo de Teste' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await ConteudoController.create(req, res);

    expect(ConteudoService.create).toHaveBeenCalledWith({ titulo: 'Conteudo de Teste' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ titulo: 'Conteudo de Teste' });
  });
}); 