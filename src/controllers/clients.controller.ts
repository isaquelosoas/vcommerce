import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/api/clients')
export class ClientsController {
  @Get('')
  getClients() {}
  @Post('')
  createClient() {}
  @Put('')
  updateClient() {}
  @Delete('')
  deleteClient() {}
}
