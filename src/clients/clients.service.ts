import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientDto } from 'src/clients/dto/client.dto';
import { Password } from 'src/helpers/password';
import { ClientsRepository } from 'src/clients/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsReposytory: ClientsRepository) {}

  public async getClients() {
    return this.clientsReposytory.findAll();
  }

  public async getClient(id: string) {
    return this.clientsReposytory.findById(id);
  }

  public async createClient(body: ClientDto): Promise<any> {
    const { email, password } = body;
    const existingUser = await this.clientsReposytory.findByEmail(email);

    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    body.password = await Password.toHash(password);

    return this.clientsReposytory.createClient(body);
  }

  public async updateClient(id: string, body: ClientDto): Promise<any> {
    const { email, password, name } = body;

    if (!name && !password && !email) {
      throw new HttpException(
        'At least one field must be informed',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.clientsReposytory.findByIdAndUpdate(id, body);
  }

  public async deleteClient(id: string) {
    return this.clientsReposytory.deleteById(id);
  }
}
