import { Router } from "express";
import { createNewCategory } from "../controllers";

export const categoryRouter = Router();

// categoryRouter.get("/food-category");
categoryRouter.post("/food-category", createNewCategory);
// categoryRouter.patch("/food-category/:foodCategoryId");
// categoryRouter.delete("/food-category/:foodCategoryId");
