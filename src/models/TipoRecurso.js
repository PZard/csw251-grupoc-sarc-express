import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class TipoRecursoModel {
  async create(data) {
    return prisma.tipoRecurso.create({ data });
  }
  async findAll() {
    return prisma.tipoRecurso.findMany();
  }
  async findById(idTipoRecurso) {
    return prisma.tipoRecurso.findUnique({ where: { idTipoRecurso } });
  }
  async update(idTipoRecurso, data) {
    return prisma.tipoRecurso.update({ where: { idTipoRecurso }, data });
  }
  async delete(idTipoRecurso) {
    return prisma.tipoRecurso.delete({ where: { idTipoRecurso } });
  }
}

export default new TipoRecursoModel(); 