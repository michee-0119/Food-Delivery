import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const deleteFoodMenu = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteFoods = await FoodModel.findOneAndDelete(id);

    if (!deleteFoods)
      return res.status(400).send({ message: "Food is not found" });

    return res
      .status(200)
      .send({ message: "Deleted successfully", data: deleteFoods });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Failed to delete a food", error });
  }
};
