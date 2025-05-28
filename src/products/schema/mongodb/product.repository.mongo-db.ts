import { IProductRepository } from '../product.repository';

export class MongoDbProductRepository implements IProductRepository {
  constructor(private readonly productModel: any) {}

  async findAll(): Promise<any[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<any> {
    return this.productModel.findById(id).exec();
  }

  async create(product: any): Promise<any> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async update(id: string, product: any): Promise<any> {
    return this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
