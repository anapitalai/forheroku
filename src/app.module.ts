import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyService } from './property/property.service';
import { PropertyController } from './property/property.controller';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PropertyModule],
  controllers: [AppController, PropertyController],
  providers: [AppService, PropertyService],
})
export class AppModule {}
