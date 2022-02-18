import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  id: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  name: string;
}
