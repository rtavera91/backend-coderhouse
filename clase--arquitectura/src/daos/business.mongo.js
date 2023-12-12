import { businessModel } from "../models/business.model.js";
import { BasicMongo } from "./basic.mongo.js";

class BusinessModel extends BasicMongo {
  constructor(model) {
    super(businessModel);
  }

  async addProduct(id, product) {
    const business = await businessModel.findById(id);
    business.products.push(product);
    return business.save();
  }
}

export const businessMongo = new BusinessMongo();
