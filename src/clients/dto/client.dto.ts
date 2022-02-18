import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class ClientDto {
  id: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;

  @IsNotEmpty()
  name: string;
}
