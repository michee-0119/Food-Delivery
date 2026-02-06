import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const deleteFoodMenu = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteFoods = await FoodModel.findOneAndDelete(id);

    res
      .status(200)
      .send({ message: "Deleted successfully", data: deleteFoods });
  } catch (error) {
    res.status(200).send(console.error(error));
  }
};
