import { businessMongo } from "../daos/business.mongo";

class BusinessService {
  async findAll() {
    const response = await businessMongo.getAll();
    return response;
  }

  async findById(id) {
    const response = await businessMongo.getById(id);
    return response;
  }

  async createOne(business) {
    const response = businessMongo.createOne(business);
    return response;
  }

  async updateOne(business) {
    const { id, ...businessInfo } = business;
    const response = await businessMongo.updateOne(id, businessInfo);
    return response;
  }

  async deleteOne(id) {
    const response = await businessMongo.deleteOne(id);
    return response;
  }

  async addProduct(product) {
    const { id, ...productInfo } = product;
    const response = await businessMongo.addProduct(id, productInfo);
    return response;
  }
}

export const businessService = new BusinessService();
