import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyService } from './property/property.service';
import { PropertyController } from './property/property.controller';
import { PropertyModule } from './property/property.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.MONGO_URI),PropertyModule],
  controllers: [AppController, PropertyController],
  providers: [AppService, PropertyService],
})
export class AppModule {}
