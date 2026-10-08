import { prisma } from "../database/client";

export class CarRepository {
  async create(data: any): Promise<any> {
    return await prisma.car.create({
      data,
      include: { customer: true },
    });
  }

  async findAll(): Promise<any[]> {
    return await prisma.car.findMany({
      include: { customer: true },
    });
  }

  async findById(id: number): Promise<any | null> {
    return await prisma.car.findUnique({
      where: { id },
      include: { customer: true },
    });
  }

  async update(id: number, data: any): Promise<any> {
    return await prisma.car.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<any> {
    return await prisma.car.delete({
      where: { id },
    });
  }
}
