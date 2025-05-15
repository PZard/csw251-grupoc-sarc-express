import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class CurriculoModel {
  async create(data) {
    return prisma.curriculo.create({ data });
  }
  async findAll() {
    return prisma.curriculo.findMany();
  }
  async findById(idCurriculo) {
    return prisma.curriculo.findUnique({ where: { idCurriculo } });
  }
  async update(idCurriculo, data) {
    return prisma.curriculo.update({ where: { idCurriculo }, data });
  }
  async delete(idCurriculo) {
    return prisma.curriculo.delete({ where: { idCurriculo } });
  }
}

export default new CurriculoModel(); 