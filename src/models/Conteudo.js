import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class ConteudoModel {
  async create(data) {
    return prisma.conteudo.create({ data });
  }
  async findAll() {
    return prisma.conteudo.findMany();
  }
  async findById(id) {
    return prisma.conteudo.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.conteudo.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.conteudo.delete({ where: { id } });
  }
}

export default new ConteudoModel(); 