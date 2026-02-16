import { Router } from "express";
import {
  createNewCategory,
  deleteCategory,
  getFoodCategory,
  updateCategory,
} from "../controllers";
import { authentication, authorization } from "../middlewares";
import { UserRole } from "../models";

export const categoryRouter = Router();

categoryRouter.get(
  "/get-category",
  // authentication,
  // authorization(UserRole.ADMIN),
  getFoodCategory,
);
categoryRouter.post(
  "/create-category",
  // authentication,
  // authorization(UserRole.ADMIN),
  createNewCategory,
);
categoryRouter.patch(
  "/update-category/:foodCategoryId",
  // authentication,
  // authorization(UserRole.ADMIN),
  updateCategory,
);
categoryRouter.delete(
  "/delete-category/:foodCategoryId",
  // authentication,
  // authorization(UserRole.ADMIN),
  deleteCategory,
);
