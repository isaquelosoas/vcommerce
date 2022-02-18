import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients.controller';
import { ProductsController } from './controllers/products.controller';
import { ClientsRepository } from './repository/clients.repository';
import { ProductsRepository } from './repository/products.repository';
import { ClientsService } from './services/clients.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [ClientsController, ProductsController],
  providers: [
    ClientsService,
    ClientsRepository,
    ProductsRepository,
    ProductsService,
  ],
})
export class AppModule {}
