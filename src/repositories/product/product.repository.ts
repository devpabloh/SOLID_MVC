import { Product } from "../../entities/product";

export interface productRepository{
    save(product: Product): Promise<void>
    list(): Promise<Product[]>
    update(product: Product): Promise<void>
    find(id: string): Promise<Product>
}