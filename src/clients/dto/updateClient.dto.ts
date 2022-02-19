import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ClientDto } from './client.dto';

export class UpdateClientDto extends ClientDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  cpf: string;

  @IsOptional()
  sex: 'male' | 'female';
}
