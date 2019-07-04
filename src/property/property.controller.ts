import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    get(){
        return 'all the properties around lae';
    }
    @Post()
    create(){
        return 'all the posted stuff';
    }
}
