import Chamada from '../models/Chamada.js';

class ChamadaService {
  async create(data) {
    return Chamada.create(data);
  }
  async findAll() {
    return Chamada.findAll();
  }
  async findById(id) {
    return Chamada.findById(id);
  }
  async update(id, data) {
    return Chamada.update(id, data);
  }
  async delete(id) {
    return Chamada.delete(id);
  }
  async getHistorico(alunoEmail) {
    return Chamada.findMany({ where: { alunoEmail } });
  }
}

export default new ChamadaService(); 