import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrder,
  getFoodOrderByUserId,
  updatedFoodByFoodOrderId,
} from "../controllers";

export const foodOrderRouter = Router();
foodOrderRouter.post("/food-order", createFoodOrder);
foodOrderRouter.get("/food-order", getFoodOrder);
foodOrderRouter.get("/food-order/:userId", getFoodOrderByUserId);
foodOrderRouter.patch("/food-order/:foodOrderId", updatedFoodByFoodOrderId);
