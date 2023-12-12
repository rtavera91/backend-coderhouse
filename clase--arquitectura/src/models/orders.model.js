import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  products: [],
  price: {
    type: Number,
  },
});

export const ordersModel = mongoose.model("Orders", ordersSchema);
