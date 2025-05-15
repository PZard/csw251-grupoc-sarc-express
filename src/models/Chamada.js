import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class ChamadaModel {
  async create(data) {
    return prisma.chamada.create({ data });
  }
  async findAll() {
    return prisma.chamada.findMany();
  }
  async findById(id) {
    return prisma.chamada.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.chamada.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.chamada.delete({ where: { id } });
  }
}

export default new ChamadaModel(); 