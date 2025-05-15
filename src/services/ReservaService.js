import Reserva from '../models/Reserva.js';

class ReservaService {
  async create(data) {
    return Reserva.create(data);
  }
  async findAll() {
    return Reserva.findAll();
  }
  async findById(id) {
    return Reserva.findById(id);
  }
  async update(id, data) {
    return Reserva.update(id, data);
  }
  async delete(id) {
    return Reserva.delete(id);
  }
}

export default new ReservaService(); 