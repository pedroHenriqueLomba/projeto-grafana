import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
