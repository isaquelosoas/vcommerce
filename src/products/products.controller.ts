import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/api/products')
export class ProductsController {
  @Get('')
  getProducts() {}
  @Post('')
  createProduct() {}
  @Put('')
  updateProduct() {}
  @Delete('')
  deleteProduct() {}
}
