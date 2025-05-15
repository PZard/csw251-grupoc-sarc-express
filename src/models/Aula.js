import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class AulaModel {
  async create(data) {
    return prisma.aula.create({ data });
  }
  async findAll() {
    return prisma.aula.findMany();
  }
  async findById(id) {
    return prisma.aula.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.aula.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.aula.delete({ where: { id } });
  }
}

export default new AulaModel(); 