import { ordersModel } from "../models/business.model.js";
import { BasicMongo } from "./basic.mongo.js";

class OrdersModel extends BasicMongo {
  constructor(model) {
    super(ordersModel);
  }
}

export const ordersMongo = new OrdersMongo();
