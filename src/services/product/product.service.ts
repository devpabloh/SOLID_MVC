export type sellOutputDto ={
    id: string;
    balance: number;
}

export type buyOutputDto = {
    id: string;
    balance: number;
}

export type listOutputDto = {
    products: {
        id: string;
        name: string;
        price: number;
        balance: number;
    }
}

export interface ProductService{
    sell(id: string, amount: number): Promise<sellOutputDto>
    buy(id: string, amount: number): Promise<buyOutputDto>
    list(): Promise<listOutputDto>
}