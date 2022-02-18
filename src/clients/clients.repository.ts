import { Injectable } from '@nestjs/common';
import { ClientDto } from 'src/clients/dto/client.dto';

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
    return body;
  }

  public async findByIdAndUpdate(id: string, body: ClientDto): Promise<any> {
    return body;
  }

  public async deleteById(id: string): Promise<any> {
    return 'Usuário deletado com sucesso';
  }
}
