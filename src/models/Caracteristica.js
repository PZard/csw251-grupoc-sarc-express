import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class CaracteristicaModel {
  async create(data) {
    return prisma.caracteristica.create({ data });
  }
  async findAll() {
    return prisma.caracteristica.findMany();
  }
  async findById(id) {
    return prisma.caracteristica.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.caracteristica.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.caracteristica.delete({ where: { id } });
  }
}

export default new CaracteristicaModel(); 