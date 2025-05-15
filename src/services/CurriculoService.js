import Curriculo from '../models/Curriculo.js';

class CurriculoService {
  async create(data) {
    return Curriculo.create(data);
  }
  async findAll() {
    return Curriculo.findAll();
  }
  async findById(idCurriculo) {
    return Curriculo.findById(idCurriculo);
  }
  async update(idCurriculo, data) {
    return Curriculo.update(idCurriculo, data);
  }
  async delete(idCurriculo) {
    return Curriculo.delete(idCurriculo);
  }
}

export default new CurriculoService();