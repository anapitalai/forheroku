import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePropertyDTO } from 'src/property/dto/property.dto';
import { Property } from 'src/property/interface/property.interface';
import { StationeryService } from './stationery.service';

@Controller('stationery')
export class StationeryController {
    constructor(private stationeryService:StationeryService){}
    @Get()
    get(){
        return this.stationeryService.get();
    }
    @Post()
    create(@Body() createPropertyDTO:CreatePropertyDTO):Promise<Property>{
        return this.stationeryService.create(createPropertyDTO);
    }

    @Put(':id')
    //@UseInterceptors(FileInterceptor('images'))
    async update(@Param('id') id,@Body() updatePropertyDTO:CreatePropertyDTO):Promise<Property>{
    return this.stationeryService.update(id,updatePropertyDTO);
  }


    @Delete(':id')
    delete(@Param('id') id):Promise<Property> {
        return this.stationeryService.delete(id);
    }
}
