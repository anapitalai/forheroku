import { Controller, Get, Post, Body,Put,Delete,Param } from '@nestjs/common';
import { CreatePropertyDTO } from './dto/property.dto';
import { Property } from './interface/property.interface';
import { PropertyService } from './property.service';
import { create } from 'domain';

@Controller('property')
export class PropertyController {
    constructor(private propertyService:PropertyService){}
    @Get()
    get(){
        return 'all the properties around lae';
    }
    @Post()
    create(@Body() createPropertyDTO:CreatePropertyDTO):Promise<Property>{
        return this.propertyService.create(createPropertyDTO);
    }

    @Put(':id')
    update(@Param('id') id):String{
        return `${id} was updated by Heroku`;
    }
    @Delete(':id')
    delete(@Param('id') id ):String{
        return `${id} was deleted by heroku`;
    }
}
