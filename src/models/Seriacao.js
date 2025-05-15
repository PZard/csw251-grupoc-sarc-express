import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class SeriacaoModel {
  async create(data) {
    return prisma.seriacao.create({ data });
  }
  async findAll() {
    return prisma.seriacao.findMany();
  }
  async findById(id) {
    return prisma.seriacao.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.seriacao.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.seriacao.delete({ where: { id } });
  }
}

export default new SeriacaoModel(); 