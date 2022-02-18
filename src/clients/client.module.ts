import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ClientsRepository,
  ],
})
export class ClientModule {}
