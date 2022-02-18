import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('')
  getProducts(@Query('q') query: string) {
    return this.productsService.getProducts(query);
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Post('')
  createProduct(@Body() body: ProductDto) {
    return this.productsService.createProduct(body);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(id, body);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
