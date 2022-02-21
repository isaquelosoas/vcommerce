import { Injectable } from '@nestjs/common';
import { ClientDto } from 'src/clients/dto/client.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class ClientsRepository {
  public async findAll(): Promise<any> {
    return [{ id: 'asdasdasd', name: 'teste@teste.com', nome: 'teste' }];
  }

  public async findById(id: string): Promise<any> {
    return { id: id, name: 'teste@teste.com', nome: 'teste' };
  }

  public async findByEmail(email: string): Promise<any> {
    return undefined;
  }

  public async createClient(body: ClientDto): Promise<any> {
    const { email, cpf, name, sex } = body;
    return await prisma.client.create({
      data: {
        name,
        email,
        cpf,
        sex,
      },
    });
  }

  public async findByIdAndUpdate(id: string, body: ClientDto): Promise<any> {
    return body;
  }

  public async deleteById(id: string): Promise<any> {
    return 'Usuário deletado com sucesso';
  }
}
