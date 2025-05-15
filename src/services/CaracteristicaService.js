import Caracteristica from '../models/Caracteristica.js';

class CaracteristicaService {
  async create(data) {
    return Caracteristica.create(data);
  }
  async findAll() {
    return Caracteristica.findAll();
  }
  async findById(id) {
    return Caracteristica.findById(id);
  }
  async update(id, data) {
    return Caracteristica.update(id, data);
  }
  async delete(id) {
    return Caracteristica.delete(id);
  }
}

export default new CaracteristicaService(); 