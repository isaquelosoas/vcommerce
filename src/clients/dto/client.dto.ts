import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class ClientDto {
  id: string;

  @IsEmail()
  email: string;

  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sex: 'male' | 'female';
}
