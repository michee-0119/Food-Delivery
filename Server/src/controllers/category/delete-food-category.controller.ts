import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { foodCaetgoryId } = req.params;

    const deletedCategory =
      await FoodCategoryModel.findByIdAndDelete(foodCaetgoryId);

    if (!deletedCategory)
      return res.status(400).send({ message: "Category is not found" });

    return res
      .status(200)
      .send({ message: "Category is deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Failed to delete a category", error });
  }
};
