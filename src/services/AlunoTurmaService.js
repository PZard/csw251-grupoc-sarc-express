import AlunoTurma from '../models/AlunoTurma.js';

class AlunoTurmaService {
  async create(data) {
    return AlunoTurma.create(data);
  }
  async findAll() {
    return AlunoTurma.findAll();
  }
  async findById(id) {
    return AlunoTurma.findById(id);
  }
  async update(id, data) {
    return AlunoTurma.update(id, data);
  }
  async delete(id) {
    return AlunoTurma.delete(id);
  }
}

export default new AlunoTurmaService(); 