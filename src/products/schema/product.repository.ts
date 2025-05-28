export interface IProductRepository {
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any>;
  create(product: any): Promise<any>;
  update(id: string, product: any): Promise<any>;
  delete(id: string): Promise<any>;
}
