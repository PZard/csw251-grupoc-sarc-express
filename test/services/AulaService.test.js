import AulaService from '../../src/services/AulaService.js';
import Aula from '../../src/models/Aula.js';

jest.mock('../../src/models/Aula.js');

describe('AulaService', () => {
  it('deve criar uma aula', async () => {
    Aula.create.mockResolvedValue({ nome: 'Aula de Teste' });
    const result = await AulaService.create({ nome: 'Aula de Teste' });
    expect(result).toEqual({ nome: 'Aula de Teste' });
  });
}); 