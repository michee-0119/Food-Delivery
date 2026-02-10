import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createNewCategory = async (res: Response, req: Request) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName || typeof categoryName !== "string") {
      return res.status(400).send({ message: "Category name is requires" });
    }

    const existingCaetgory = await FoodCategoryModel.findOne({
      categoryName: categoryName.trim(),
    });

    if (existingCaetgory)
      return res
        .status(409)
        .send({ message: "This category is already created" });

    const category = await FoodCategoryModel.create({ categoryName });

    return res
      .status(200)
      .send({ message: "Created new category successfully", data: category });
  } catch (error) {
    return res.status(200).json({ message: "Failed creating category", error });
  }
};
