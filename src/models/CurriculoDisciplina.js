import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class CurriculoDisciplinaModel {
  async create(data) {
    return prisma.curriculoDisciplina.create({ data });
  }
  async findAll() {
    return prisma.curriculoDisciplina.findMany();
  }
  async findById(id) {
    return prisma.curriculoDisciplina.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.curriculoDisciplina.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.curriculoDisciplina.delete({ where: { id } });
  }
}

export default new CurriculoDisciplinaModel(); 