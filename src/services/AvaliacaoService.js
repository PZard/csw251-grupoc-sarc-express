import Avaliacao from '../models/Avaliacao.js';

class AvaliacaoService {
  async create(data) {
    return Avaliacao.create(data);
  }
  async findAll() {
    return Avaliacao.findAll();
  }
  async findById(id) {
    return Avaliacao.findById(id);
  }
  async update(id, data) {
    return Avaliacao.update(id, data);
  }
  async delete(id) {
    return Avaliacao.delete(id);
  }
  async getProgramadas(alunoEmail, disciplina) {
    const now = new Date();
    const where = {
      data: { gte: now },
      turma: {
        alunos: { some: { alunoEmail } }
      }
    };
    if (disciplina) {
      where.turma = {
        ...where.turma,
        disciplina: { nome: disciplina }
      };
    }
    return Avaliacao.findMany({ where });
  }
}

export default new AvaliacaoService(); 