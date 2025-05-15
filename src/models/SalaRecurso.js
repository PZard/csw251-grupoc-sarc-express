import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class SalaRecursoModel {
  async create(data) {
    return prisma.salaRecurso.create({ data });
  }
  async findAll() {
    return prisma.salaRecurso.findMany();
  }
  async findById(id) {
    return prisma.salaRecurso.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.salaRecurso.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.salaRecurso.delete({ where: { id } });
  }
}

export default new SalaRecursoModel(); 