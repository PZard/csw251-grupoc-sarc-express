import ReservaService from '../../src/services/ReservaService.js';
import Reserva from '../../src/models/Reserva.js';

jest.mock('../../src/models/Reserva.js');

describe('ReservaService', () => {
  it('deve criar uma reserva', async () => {
    Reserva.create.mockResolvedValue({ descricao: 'Reserva de Teste' });
    const result = await ReservaService.create({ descricao: 'Reserva de Teste' });
    expect(result).toEqual({ descricao: 'Reserva de Teste' });
  });
}); 