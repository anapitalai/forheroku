import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePropertyDTO } from 'src/property/dto/property.dto';
import { Property } from 'src/property/interface/property.interface';
import { StationeryService } from './stationery.service';
import { CreateStationeryDTO } from './dto/stationery.dto';
import { Stationery } from './interface/stationery.interface';

@Controller('stationery')
export class StationeryController {
    constructor(private stationeryService:StationeryService){}
    @Get()
    get(){
        return this.stationeryService.get();
    }
    @Post()
    create(@Body() createStationeryDTO:CreateStationeryDTO):Promise<Stationery>{
        return this.stationeryService.create(createStationeryDTO);
    }

    @Put(':id')
    //@UseInterceptors(FileInterceptor('images'))
    async update(@Param('id') id,@Body() updateStationeryDTO:CreateStationeryDTO):Promise<Stationery>{
    return this.stationeryService.update(id,updateStationeryDTO);
  }


    @Delete(':id')
    delete(@Param('id') id):Promise<Stationery> {
        return this.stationeryService.delete(id);
    }
}
