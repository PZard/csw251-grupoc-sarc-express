import TipoRecurso from '../models/TipoRecurso.js';

class TipoRecursoService {
  async create(data) {
    return TipoRecurso.create(data);
  }
  async findAll() {
    return TipoRecurso.findAll();
  }
  async findById(id) {
    return TipoRecurso.findById(id);
  }
  async update(id, data) {
    return TipoRecurso.update(id, data);
  }
  async delete(id) {
    return TipoRecurso.delete(id);
  }
}

export default new TipoRecursoService(); 