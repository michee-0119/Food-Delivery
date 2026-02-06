import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createNewCategory = async (res: Response, req: Request) => {
  try {
    const { categoryName } = req.body;
    const category = await FoodCategoryModel.create(categoryName);
    res.status(200).json({ message: "Created new category successfully" });
  } catch (error) {
    res.status(200).json({ message: "Failed", error });
  }
};
