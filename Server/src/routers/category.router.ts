import { Router } from "express";
import {
  createNewCategory,
  deleteCategory,
  getFoodCategory,
  updateCategory,
} from "../controllers";

export const categoryRouter = Router();

categoryRouter.get("/food-category", getFoodCategory);
categoryRouter.post("/food-category", createNewCategory);
categoryRouter.patch("/food-category/:foodCategoryId", updateCategory);
categoryRouter.delete("/food-category/:foodCategoryId", deleteCategory);
