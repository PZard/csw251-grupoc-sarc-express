import Usuario from '../models/Usuario.js';

class UsuarioService {
  async create(data) {
    return Usuario.create(data);
  }
  async findAll() {
    return Usuario.findAll();
  }
  async findById(email) {
    return Usuario.findById(email);
  }
  async update(email, data) {
    return Usuario.update(email, data);
  }
  async delete(email) {
    return Usuario.delete(email);
  }
}

export default new UsuarioService(); 