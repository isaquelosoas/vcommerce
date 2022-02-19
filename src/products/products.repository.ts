import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsRepository {
  public async findAll(): Promise<ProductDto[]> {
    return [
      {
        id: 'asdasdasd',
        fabrication: 'descrição padrão',
        name: 'nome',
        price: 11,
        size: 14,
      },
    ];
  }

  public async findById(id: string): Promise<ProductDto> {
    return {
      id: id,
      fabrication: 'descrição padrão',
      name: 'nome',
      price: 11,
      size: 16,
    };
  }

  public async searchProductsByName(name: string): Promise<ProductDto[]> {
    return [
      {
        id: 'asdasdasd',
        fabrication: 'descrição padrão',
        name: 'nome',
        price: 11,
        size: 12,
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
