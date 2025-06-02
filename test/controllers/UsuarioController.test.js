jest.mock('../../src/services/UsuarioService.js', () => ({
  create: jest.fn().mockResolvedValue({
    email: 'teste@teste.com',
    nome: 'Teste',
    dataNascimento: '2000-01-01',
    sexo: 'M',
  }),
  findById: jest.fn().mockResolvedValue(null),
}));

import UsuarioController from '../../src/controllers/UsuarioController.js';
import UsuarioService from '../../src/services/UsuarioService.js';

describe('UsuarioController', () => {
  it('deve criar um usuário', async () => {
    const req = { body: { email: 'teste@teste.com', nome: 'Teste', dataNascimento: '2000-01-01', sexo: 'M' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await UsuarioController.create(req, res);

    expect(UsuarioService.create).toHaveBeenCalledWith({ email: 'teste@teste.com', nome: 'Teste', dataNascimento: '2000-01-01', sexo: 'M' });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ email: 'teste@teste.com' }));
  });

  it('deve retornar erro ao criar usuário sem email', async () => {
    const req = { body: { nome: 'Teste', dataNascimento: '2000-01-01', sexo: 'M' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await UsuarioController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ errors: expect.objectContaining({ email: expect.any(String) }) }));
  });
}); 