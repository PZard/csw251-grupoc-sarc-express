import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class PredioModel {
  async create(data) {
    return prisma.predio.create({ data });
  }
  async findAll() {
    return prisma.predio.findMany();
  }
  async findById(numPredio) {
    return prisma.predio.findUnique({ where: { numPredio } });
  }
  async update(numPredio, data) {
    return prisma.predio.update({ where: { numPredio }, data });
  }
  async delete(numPredio) {
    return prisma.predio.delete({ where: { numPredio } });
  }
}

export default new PredioModel(); 