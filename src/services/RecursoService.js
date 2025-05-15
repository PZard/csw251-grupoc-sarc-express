import Recurso from '../models/Recurso.js';

class RecursoService {
  async create(data) {
    return Recurso.create(data);
  }
  async findAll() {
    return Recurso.findAll();
  }
  async findById(idRecurso) {
    return Recurso.findById(idRecurso);
  }
  async update(idRecurso, data) {
    return Recurso.update(idRecurso, data);
  }
  async delete(idRecurso) {
    return Recurso.delete(idRecurso);
  }
}

export default new RecursoService(); 