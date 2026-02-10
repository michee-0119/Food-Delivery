import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import mongoose from "mongoose";

export const  updatedFoodByFoodOrderId = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;

    if (!foodOrderId || !mongoose.Types.ObjectId.isValid("FoodOrderId")) {
      return res.status(400).json({ message: "Invalid FoodOrder Id" });
    }

    const { user, totalPrice, foodOrderItems, status } = req.body;

    const updatedFoodOrder = await FoodOrderModel.findOneAndUpdate(
      { id: foodOrderId },
      {
        user,
        totalPrice,
        foodOrderItems,
        status,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedFoodOrder) {
      return res.status(404).json({ message: "Food order not found" });
    }

    return res.status(200).json({
      message: "Food order updated successfully",
      data: updatedFoodOrder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Update failed" });
  }
};
