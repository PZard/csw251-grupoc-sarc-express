import RecursoService from '../../src/services/RecursoService.js';
import Recurso from '../../src/models/Recurso.js';

jest.mock('../../src/models/Recurso.js');

describe('RecursoService', () => {
  it('deve criar um recurso', async () => {
    Recurso.create.mockResolvedValue({ nome: 'Recurso de Teste' });
    const result = await RecursoService.create({ nome: 'Recurso de Teste' });
    expect(result).toEqual({ nome: 'Recurso de Teste' });
  });
}); 