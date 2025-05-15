import Telefone from '../models/Telefone.js';

class TelefoneService {
  async create(data) {
    return Telefone.create(data);
  }
  async findAll() {
    return Telefone.findAll();
  }
  async findById(id) {
    return Telefone.findById(id);
  }
  async update(id, data) {
    return Telefone.update(id, data);
  }
  async delete(id) {
    return Telefone.delete(id);
  }
}

export default new TelefoneService(); 