import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePropertyDTO } from './dto/property.dto';

@Controller('property')
export class PropertyController {
    @Get()
    get(){
        return 'all the properties around lae';
    }
    @Post()
    create(@Body(name) createPropertyDTO:CreatePropertyDTO){
        return `${createPropertyDTO.name}`;
    }
}
