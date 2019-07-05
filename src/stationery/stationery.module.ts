import { Module } from '@nestjs/common';
import { StationeryService } from './stationery.service';
import { StationeryController } from './stationery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StationerySchema } from './schema/stationery.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Stationery', schema: StationerySchema }])],
  providers: [StationeryService],
  controllers: [StationeryController],
  exports:[StationeryService]
})
export class StationeryModule {}
