import { ordersMongo } from "../daos/orders.mongo.js";

class OrdersService {
  async findAll() {
    const response = await ordersMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await ordersMongo.getById(id);
    return response;
  }

  async createOne(order) {
    const response = ordersMongo.createOne(order);
    return response;
  }

  async updateOne(order) {
    const { id, ...orderInfo } = order;
    const response = await ordersMongo.updateOne(id, orderInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await ordersMongo.deleteOne(id);
    return response;
  }
}

export const ordersService = new OrdersService();
