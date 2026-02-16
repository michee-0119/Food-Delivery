import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const foods = await FoodModel.find()
      .populate("categoryId")
      .sort({ createdAt: -1 });

    res.status(200).send({ message: "Food appeared", data: foods });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Error fetching food",
      error,
    });
  }
};
