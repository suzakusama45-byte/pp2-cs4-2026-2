import { CarRepository } from "../repositories/carRepository";
import type { CreateCarDto } from "../dto/car/createCarDto";
import type { UpdateCarDto } from "../dto/car/updateCarDto";
const carRepository = new CarRepository();

export class CarService {
  async create(data: CreateCarDto) {
    return await carRepository.create(data);
  }

  async findAll() {
    return await carRepository.findAll();
  }

  async findById(id: number) {
    return await carRepository.findById(id);
  }

  async update(id: number, data: UpdateCarDto) {
    return await carRepository.update(id, data);
  }

  async delete(id: number) {
    return await carRepository.delete(id);
  }
}
