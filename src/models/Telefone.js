import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class TelefoneModel {
  async create(data) {
    return prisma.telefone.create({ data });
  }
  async findAll() {
    return prisma.telefone.findMany();
  }
  async findById(id) {
    return prisma.telefone.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.telefone.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.telefone.delete({ where: { id } });
  }
}

export default new TelefoneModel(); 