import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class RequisitoModel {
  async create(data) {
    return prisma.requisito.create({ data });
  }
  async findAll() {
    return prisma.requisito.findMany();
  }
  async findById(id) {
    return prisma.requisito.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.requisito.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.requisito.delete({ where: { id } });
  }
}

export default new RequisitoModel(); 