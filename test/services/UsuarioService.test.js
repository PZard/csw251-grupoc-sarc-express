import UsuarioService from '../../src/services/UsuarioService.js';
import Usuario from '../../src/models/Usuario.js';

jest.mock('../../src/models/Usuario.js');

describe('UsuarioService', () => {
  it('deve criar um usuário', async () => {
    Usuario.create.mockResolvedValue({ email: 'teste@teste.com' });
    const result = await UsuarioService.create({ email: 'teste@teste.com' });
    expect(result).toEqual({ email: 'teste@teste.com' });
  });

  it('deve retornar todos os usuários', async () => {
    Usuario.findAll.mockResolvedValue([{ email: 'teste@teste.com' }]);
    const result = await UsuarioService.findAll();
    expect(result).toEqual([{ email: 'teste@teste.com' }]);
  });
}); 