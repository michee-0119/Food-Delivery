import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const createFoodMenu = async (req: Request, res: Response) => {
  try {
    const foods = req.body;

    const createFoods = await FoodModel.insertMany(foods);

    return res.status(201).json({
      message: "Foods created successfully",
      data: createFoods,
      user: req.body,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create foods" });
  }
};
