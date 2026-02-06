import { Model, model, models, Schema } from "mongoose";

type FoodCategory = {
  categoryName: String;
};

export const foodCategorySchema = new Schema<FoodCategory>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true },
);

export const FoodCategoryModel: Model<FoodCategory> =
  models["Categories"] || model<FoodCategory>("Categories", foodCategorySchema);
