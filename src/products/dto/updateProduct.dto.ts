import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ProductDto } from './product.dto';

export class UpdateProductDto extends ProductDto {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  price: number;
}
