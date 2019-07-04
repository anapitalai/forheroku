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

    @Put(':id')
    update(@Param('id') id):String{
        return `${id} was updated by Heroku`;
    }
    @Delete(':id')
    delete(@Param('id') id ):String{
        return `${id} was deleted by heroku`;
    }
}
