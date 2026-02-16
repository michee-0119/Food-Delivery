import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const createFoodMenu = async (req: Request, res: Response) => {
  try {
    const { name, price, categoryId, image, description } = req.body;

    if (!name || !price || !categoryId) {
      return res
        .status(400)
        .send({ message: "Food name, price, and categoryId are required" });
    }

    const food = await FoodModel.create({
      name,
      price,
      categoryId,
      image,
      description,
    });

    return res.status(201).send({
      message: "Foods created successfully",
      data: food,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Failed to create foods", error });
  }
};
