import TelefoneService from '../../src/services/TelefoneService.js';
import Telefone from '../../src/models/Telefone.js';

jest.mock('../../src/models/Telefone.js');

describe('TelefoneService', () => {
  it('deve criar um telefone', async () => {
    Telefone.create.mockResolvedValue({ numero: '123456789' });
    const result = await TelefoneService.create({ numero: '123456789' });
    expect(result).toEqual({ numero: '123456789' });
  });
}); 