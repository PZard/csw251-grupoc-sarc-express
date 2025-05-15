import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class TurmaModel {
  async create(data) {
    return prisma.turma.create({ data });
  }
  async findAll() {
    return prisma.turma.findMany();
  }
  async findById(id) {
    return prisma.turma.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.turma.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.turma.delete({ where: { id } });
  }
}

export default new TurmaModel(); 