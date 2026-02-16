import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find().sort({ createdAt: -1 });

    return res.status(200).send({ data: categories });
  } catch (error) {
    console.error(error);

    return res.status(500).send({ message: "Failed to get categories", error });
  }
};
