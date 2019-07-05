import { Module } from '@nestjs/common';
import { StationeryService } from './stationery.service';
import { StationeryController } from './stationery.controller';

@Module({
  providers: [StationeryService],
  controllers: [StationeryController]
})
export class StationeryModule {}
