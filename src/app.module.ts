import { Module } from '@nestjs/common';
import { ClientModule } from './clients/client.module';
import { ProductModule } from './products/products.module';
@Module({
  imports: [ClientModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
