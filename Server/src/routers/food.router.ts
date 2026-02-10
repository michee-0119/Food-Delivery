import { createFoodMenu, deleteFoodMenu, getFoodById } from "../controllers";
import { Router } from "express";
import { authentication, authorization } from "../middlewares";
import { UserRole } from "../models";

export const foodRouter = Router();

// foodRouter.get("/foods/:foodId");
// foodRouter.get("/foods");
foodRouter.post(
  "/create-food",
  authentication,
  authorization(UserRole.ADMIN),
  createFoodMenu,
);
foodRouter.delete("/:foodId", deleteFoodMenu);
foodRouter.patch("/:foodId", getFoodById);
