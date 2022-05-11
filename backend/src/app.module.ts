import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
//import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'admin',
    database: 'chartApp',
    entities: ['src/entity/**/*.ts'],
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10,
    timezone: '-06:00',
  }),
  BrandModule,
  CategoryModule,
  ProductModule],
  //ProductModule, 
  //CategoryModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
