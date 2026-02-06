import { createFoodMenu, deleteFoodMenu, getFoodById } from "../controllers";
import { Router } from "express";

export const foodRouter = Router();

// foodRouter.get("/foods/:foodId");
// foodRouter.get("/foods");
foodRouter.post("/foods/create-food", createFoodMenu);
foodRouter.delete("/foods/:foodId", deleteFoodMenu);
foodRouter.patch("/foods/:foodId", getFoodById);
