import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  id: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  fabrication: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  size: number;
}
