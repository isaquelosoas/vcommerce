import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateClientDto } from 'src/clients/dto/updateClient.dto';
import { ClientDto } from 'src/clients/dto/client.dto';
import { ClientsService } from 'src/clients/clients.service';

@Controller('/api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get('')
  getClients() {
    return this.clientsService.getClients();
  }

  @Get('/:id')
  getClient(@Param('id') id: string) {
    return this.clientsService.getClient(id);
  }

  @Post('')
  createClient(@Body() body: ClientDto) {
    return this.clientsService.createClient(body);
  }

  @Put('/:id')
  updateClient(@Param('id') id: string, @Body() body: UpdateClientDto) {
    return this.clientsService.updateClient(id, body);
  }

  @Delete('/:id')
  deleteClient(@Param('id') id: string) {
    return this.clientsService.deleteClient(id);
  }
}
