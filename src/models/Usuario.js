import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class UsuarioModel {
  async create(data) {
    return prisma.usuario.create({ data });
  }
  async findAll() {
    return prisma.usuario.findMany();
  }
  async findById(email) {
    return prisma.usuario.findUnique({ where: { email } });
  }
  async update(email, data) {
    return prisma.usuario.update({ where: { email }, data });
  }
  async delete(email) {
    return prisma.usuario.delete({ where: { email } });
  }
}

export default new UsuarioModel(); 