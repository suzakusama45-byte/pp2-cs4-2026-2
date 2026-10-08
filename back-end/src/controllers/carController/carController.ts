import { Request, Response } from "express";
import { CarService } from "../../services/carService";

const carService = new CarService();

export class CarController {
  async create(req: Request, res: Response) {
    try {
      const newCar = await carService.create(req.body);
      return res.status(201).json(newCar);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const cars = await carService.findAll();
      return res.status(200).json(cars);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const car = await carService.findById(Number(id));
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      return res.status(200).json(car);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedCar = await carService.update(Number(id), req.body);
      return res.status(200).json(updatedCar);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await carService.delete(Number(id));
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
