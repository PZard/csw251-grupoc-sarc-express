import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class DisciplinaModel {
  async create(data) {
    return prisma.disciplina.create({ data });
  }
  async findAll() {
    return prisma.disciplina.findMany();
  }
  async findById(codDisciplina) {
    return prisma.disciplina.findUnique({ where: { codDisciplina } });
  }
  async update(codDisciplina, data) {
    return prisma.disciplina.update({ where: { codDisciplina }, data });
  }
  async delete(codDisciplina) {
    return prisma.disciplina.delete({ where: { codDisciplina } });
  }
}

export default new DisciplinaModel(); 