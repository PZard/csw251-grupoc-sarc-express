import Turma from '../models/Turma.js';

class TurmaService {
  async create(data) {
    return Turma.create(data);
  }
  async findAll() {
    return Turma.findAll();
  }
  async findById(id) {
    return Turma.findById(id);
  }
  async update(id, data) {
    return Turma.update(id, data);
  }
  async delete(id) {
    return Turma.delete(id);
  }
}

export default new TurmaService(); 