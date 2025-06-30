type ProductProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class Product{
  public props: ProductProps;

  private constructor(props: ProductProps){
    this.props = props
  }

  public static create(name: string, price: number): Product{
    console.log("Criando um novo produto!")
    return new Product({id: '123', name, price, quantity: 0})
  }

  public adicionarAoEstoque(quantidade: number){
    console.log(`Adicionando ${quantidade} ao estoque do produto ${this.props.name}`)
    this.props.quantity += quantidade
  }
}

