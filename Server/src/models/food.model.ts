import { Model, model, models, ObjectId, Schema } from "mongoose";

export type Food = {
  foodName: String;
  price: Number;
  image: String;
  ingredients: String;
  category: ObjectId;
};

export const foodSchema = new Schema<Food>(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true },
);

export const FoodModel: Model<Food> =
  models["Foods"] || model<Food>("Foods", foodSchema);
