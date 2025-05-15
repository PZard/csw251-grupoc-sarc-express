import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class AlunoTurmaModel {
  async create(data) {
    return prisma.alunoTurma.create({ data });
  }
  async findAll() {
    return prisma.alunoTurma.findMany();
  }
  async findById(id) {
    return prisma.alunoTurma.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.alunoTurma.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.alunoTurma.delete({ where: { id } });
  }
}

export default new AlunoTurmaModel(); 