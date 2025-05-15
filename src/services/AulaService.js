import Aula from '../models/Aula.js';

class AulaService {
  async create(data) {
    return Aula.create(data);
  }
  async findAll() {
    return Aula.findAll();
  }
  async findById(id) {
    return Aula.findById(id);
  }
  async update(id, data) {
    return Aula.update(id, data);
  }
  async delete(id) {
    return Aula.delete(id);
  }
  async getCalendario(alunoEmail) {
    const now = new Date();
    return Aula.findMany({
      where: {
        alunos: {
          some: { alunoEmail }
        },
        data: { gte: now }
      }
    });
  }
}

export default new AulaService(); 