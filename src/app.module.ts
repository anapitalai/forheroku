import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyService } from './property/property.service';
import { PropertyController } from './property/property.controller';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://alois:raliku2019>@ds347467.mlab.com:47467/raliku'),PropertyModule],
  controllers: [AppController, PropertyController],
  providers: [AppService, PropertyService],
})
export class AppModule {}
