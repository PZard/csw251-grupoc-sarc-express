import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class RecursoModel {
  async create(data) {
    return prisma.recurso.create({ data });
  }
  async findAll() {
    return prisma.recurso.findMany();
  }
  async findById(idRecurso) {
    return prisma.recurso.findUnique({ where: { idRecurso } });
  }
  async update(idRecurso, data) {
    return prisma.recurso.update({ where: { idRecurso }, data });
  }
  async delete(idRecurso) {
    return prisma.recurso.delete({ where: { idRecurso } });
  }
}

export default new RecursoModel(); 