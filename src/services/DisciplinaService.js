import Disciplina from '../models/Disciplina.js';

class DisciplinaService {
  async create(data) {
    return Disciplina.create(data);
  }

  async findAll() {
    return Disciplina.findAll();
  }

  async findById(codDisciplina) {
    return Disciplina.findById(codDisciplina);
  }

  async update(codDisciplina, data) {
    return Disciplina.update(codDisciplina, data);
  }

  async delete(codDisciplina) {
    return Disciplina.delete(codDisciplina);
  }
}

export default new DisciplinaService(); 