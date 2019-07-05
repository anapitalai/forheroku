import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyService } from './property/property.service';
import { PropertyController } from './property/property.controller';
import { PropertyModule } from './property/property.module';
import { StationeryModule } from './stationery/stationery.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './shared/user/user.service';
import { UserModule } from './shared/user/user.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.MONGO_URI),PropertyModule, StationeryModule, AuthModule, UserModule],
  controllers: [AppController, PropertyController, AuthController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
