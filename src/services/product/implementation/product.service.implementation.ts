import { buyOutputDto, listOutputDto } from './../product.service';

import { productRepository } from "../../../repositories/product/product.repository";
import { ProductService, sellOutputDto } from "../product.service";

export class ProductServiceImplementation implements ProductService{
    private constructor(readonly repository: productRepository){}

    public static build(repository: productRepository){
        return new ProductServiceImplementation(repository)
    }

    public async sell(id: string, amount: number): Promise<sellOutputDto>{
        const aProduct = await this.repository.find(id)

        if(!aProduct){
            throw new Error(`O produto ${id} não foi encontrado`)
        }

        aProduct.sell(amount)

        await this.repository.update(aProduct)

        const output: sellOutputDto = {
            id: aProduct.id,
            balance: aProduct.quantity
        }
    }

    public async buy(id: string, amount: number): Promise<buyOutputDto>{
        throw new Error("Method not implemented.")
    }

    public async list(): Promise<listOutputDto>{
        throw new Error("Method not implemented.")
    }
}