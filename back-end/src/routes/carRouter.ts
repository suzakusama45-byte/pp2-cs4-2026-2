import { Router } from "express";
import { CarController } from "../controllers/carController/carController";

export const carRouter = Router();
const carController = new CarController();

carRouter.post("/", carController.create);
carRouter.get("/", carController.findAll);
carRouter.get("/:id", carController.findById);
carRouter.put("/:id", carController.update);
carRouter.delete("/:id", carController.delete);
