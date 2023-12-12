import { usersMongo } from "../daos/users.mongo";
import { hashData } from "../utils";

class UsersService {
  async findAll() {
    const response = await usersMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await usersMongo.getById(id);
    return response;
  }

  async findByEmail(email) {
    const response = await usersMongo.findUserByEmail(email);
    return response;
  }

  async createOne(user) {
    const { password } = user;
    const hashedPassword = await hashData(password);
    const response = usersMongo.createOne({
      ...user,
      password: hashedPassword,
    });
    return response;
  }

  async updateOne(user) {
    const { id, ...userInfo } = user;
    const response = await usersMongo.updateOne(id, userInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await usersMongo.deleteOne(id);
    return response;
  }
}

export const usersService = new UsersService();
