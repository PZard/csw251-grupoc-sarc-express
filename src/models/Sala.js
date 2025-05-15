import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class SalaModel {
  async create(data) {
    return prisma.sala.create({ data });
  }
  async findAll() {
    return prisma.sala.findMany();
  }
  async findById(id) {
    return prisma.sala.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.sala.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.sala.delete({ where: { id } });
  }
}

export default new SalaModel(); 