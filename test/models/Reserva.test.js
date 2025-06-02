import Reserva from '../../src/models/Reserva.js';

describe('Reserva Model', () => {
  it('deve ter método create', () => {
    expect(typeof Reserva.create).toBe('function');
  });
  it('deve ter método findAll', () => {
    expect(typeof Reserva.findAll).toBe('function');
  });
  it('deve ter método findById', () => {
    expect(typeof Reserva.findById).toBe('function');
  });
  it('deve ter método update', () => {
    expect(typeof Reserva.update).toBe('function');
  });
  it('deve ter método delete', () => {
    expect(typeof Reserva.delete).toBe('function');
  });
}); 