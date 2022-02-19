import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  public async getProducts(query) {
    if (query) {
      return this.productsRepository.searchProductsByName(query);
    }
    return this.productsRepository.findAll();
  }

  public async getProduct(id: string) {
    return this.productsRepository.findById(id);
  }

  public async createProduct(body: ProductDto): Promise<any> {
    return this.productsRepository.createProduct(body);
  }

  public async updateProduct(id: string, body: ProductDto): Promise<any> {
    const { price, fabrication, name, size } = body;

    if (!name && !price && !fabrication && !size) {
      throw new HttpException(
        'At least one field must be informed',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.productsRepository.findByIdAndUpdate(id, body);
  }

  public async deleteProduct(id: string) {
    return this.productsRepository.deleteById(id);
  }
}
