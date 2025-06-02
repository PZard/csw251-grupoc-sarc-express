import ConteudoService from '../../src/services/ConteudoService.js';
import Conteudo from '../../src/models/Conteudo.js';

jest.mock('../../src/models/Conteudo.js');

describe('ConteudoService', () => {
  it('deve criar um conteudo', async () => {
    Conteudo.create.mockResolvedValue({ titulo: 'Conteudo de Teste' });
    const result = await ConteudoService.create({ titulo: 'Conteudo de Teste' });
    expect(result).toEqual({ titulo: 'Conteudo de Teste' });
  });
}); 