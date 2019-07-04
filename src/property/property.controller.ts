import { Controller, Get, Post, Body,Put,Delete,Param } from '@nestjs/common';
import { CreatePropertyDTO } from './dto/property.dto';

@Controller('property')
export class PropertyController {
    @Get()
    get(){
        return 'all the properties around lae';
    }
    @Post()
    create(@Body() createPropertyDTO:CreatePropertyDTO):String{
        return `${createPropertyDTO.name}`;
    }

    @Put()
    update(@Param('id') id):String{
        return `${id}`;
    }
    @Delete()
    delete(@Param('id') id ):String{
        return `${id}`;
    }
}
