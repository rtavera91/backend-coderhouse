import { usersModel } from "../models/business.model.js";
import { BasicMongo } from "./basic.mongo.js";

class UsersModel extends BasicMongo {
  constructor(model) {
    super(usersModel);
  }

  async findUserByEmail(email) {
    return this.model.findOne({ email });
  }
}

export const usersMongo = new UsersMongo();
