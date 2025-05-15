import Conteudo from '../models/Conteudo.js';

class ConteudoService {
  async create(data) {
    return Conteudo.create(data);
  }
  async findAll() {
    return Conteudo.findAll();
  }
  async findById(id) {
    return Conteudo.findById(id);
  }
  async update(id, data) {
    return Conteudo.update(id, data);
  }
  async delete(id) {
    return Conteudo.delete(id);
  }
}

export default new ConteudoService(); 