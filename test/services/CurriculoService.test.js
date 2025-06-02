import CurriculoService from '../../src/services/CurriculoService.js';
import Curriculo from '../../src/models/Curriculo.js';

jest.mock('../../src/models/Curriculo.js');

describe('CurriculoService', () => {
  it('deve criar um curriculo', async () => {
    Curriculo.create.mockResolvedValue({ nome: 'Curriculo de Teste' });
    const result = await CurriculoService.create({ nome: 'Curriculo de Teste' });
    expect(result).toEqual({ nome: 'Curriculo de Teste' });
  });
}); 