import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;

    const createFoodOrderAPI = await FoodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems,
      status,
    });

    res.status(200).send({
      message: "Food category created successfully",
      data: createFoodOrderAPI,
    });
  } catch (error) {
    console.error(error);
    res.status(200).send(error);
  }
};
