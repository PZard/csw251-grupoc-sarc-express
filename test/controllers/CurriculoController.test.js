jest.mock('../../src/services/CurriculoService.js', () => ({
  create: jest.fn().mockResolvedValue({
    nome: 'Curriculo de Teste',
  })
}));

import CurriculoService from '../../src/services/CurriculoService.js';
import CurriculoController from '../../src/controllers/CurriculoController.js'; // Supondo que existe um CurriculoController

describe('CurriculoController', () => {
  it('deve criar um curriculo', async () => {
    const req = { body: { nomeCurso: 'Curriculo de Teste', dataInicioVigencia: '2023-01-01', dataFimVigencia: '2023-12-31' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await CurriculoController.create(req, res);
    
    expect(CurriculoService.create).toHaveBeenCalledWith({ nomeCurso: 'Curriculo de Teste', dataInicioVigencia: '2023-01-01', dataFimVigencia: '2023-12-31' });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ nome: 'Curriculo de Teste' }));
  });
}); 