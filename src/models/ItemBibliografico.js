import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class ItemBibliograficoModel {
  async create(data) {
    return prisma.itemBibliografico.create({ data });
  }
  async findAll() {
    return prisma.itemBibliografico.findMany();
  }
  async findById(id) {
    return prisma.itemBibliografico.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.itemBibliografico.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.itemBibliografico.delete({ where: { id } });
  }
}

export default new ItemBibliograficoModel(); 