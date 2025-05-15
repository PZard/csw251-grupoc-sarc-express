import { PrismaClient } from '../../prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

class ReservaModel {
  async create(data) {
    return prisma.reserva.create({ data });
  }
  async findAll() {
    return prisma.reserva.findMany();
  }
  async findById(id) {
    return prisma.reserva.findUnique({ where: { id } });
  }
  async update(id, data) {
    return prisma.reserva.update({ where: { id }, data });
  }
  async delete(id) {
    return prisma.reserva.delete({ where: { id } });
  }
}

export default new ReservaModel(); 