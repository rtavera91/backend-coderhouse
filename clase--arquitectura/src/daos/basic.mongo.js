export class BasicMongo {
  constructor(model) {
    this.model = model;
  }

  async createOne(obj) {
    return this.model.create(obj);
  }

  async getAll() {
    return this.model.find();
  }

  async getById(id) {
    return this.model.findById(id);
  }

  async updateOne(id, obj) {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }

  async deleteOne(id) {
    return this.model.findByIdAndDelete(id);
  }
}
