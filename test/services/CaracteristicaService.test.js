import CaracteristicaService from '../../src/services/CaracteristicaService.js';
import Caracteristica from '../../src/models/Caracteristica.js';

jest.mock('../../src/models/Caracteristica.js');

describe('CaracteristicaService', () => {
  it('deve criar uma caracteristica', async () => {
    Caracteristica.create.mockResolvedValue({ descricao: 'Caracteristica de Teste' });
    const result = await CaracteristicaService.create({ descricao: 'Caracteristica de Teste' });
    expect(result).toEqual({ descricao: 'Caracteristica de Teste' });
  });
}); 