import { Model, model, models, ObjectId, Schema } from "mongoose";

enum FoodOrderStatus {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

type FoodOrderItem = {
  food: ObjectId;
  quantity: Number;
};

type FoodOrder = {
  user: ObjectId;
  totalPrice: Number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatus;
};

const FoodOrderItemSchema = new Schema<FoodOrderItem>({
  food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  quantity: { type: Number, required: true },
});

export const FoodOrderSchema = new Schema<FoodOrder>(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: [FoodOrderItemSchema],
    status: {
      type: String,
      enum: Object.values(FoodOrderStatus),
      default: FoodOrderStatus.PENDING,
      required: true,
    },
  },
  { timestamps: true },
);

export const FoodOrderModel: Model<FoodOrder> =
  models["Orders"] || model("Orders", FoodOrderSchema);
