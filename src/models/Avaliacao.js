import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class AvaliacaoModel {
  async create(data) {
    return prisma.avaliacao.create({ data });
  }
  async findAll() {
    return prisma.avaliacao.findMany();
  }
  async findById(id) {
    return prisma.avaliacao.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.avaliacao.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.avaliacao.delete({ where: { id } });
  }
}

export default new AvaliacaoModel(); 