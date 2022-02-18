import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsRepository {
  public async findAll(): Promise<ProductDto[]> {
    return [
      {
        id: 'asdasdasd',
        description: 'descrição padrão',
        name: 'nome',
        price: 11,
      },
    ];
  }

  public async findById(id: string): Promise<ProductDto> {
    return { id: id, description: 'descrição padrão', name: 'nome', price: 11 };
  }

  public async searchProductsByName(name: string): Promise<ProductDto[]> {
    return [
      {
        id: 'asdasdasd',
        description: 'descrição padrão',
        name: 'nome',
        price: 11,
      },
    ];
  }

  public async createProduct(body: ProductDto): Promise<any> {
    return body;
  }

  public async findByIdAndUpdate(id: string, body: ProductDto): Promise<any> {
    return body;
  }

  public async deleteById(id: string): Promise<any> {
    return 'Produto deletado com sucesso';
  }
}
