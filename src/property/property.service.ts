import { Injectable,Post,Get } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class PropertyService {
    @Get()
    get(){
        return 'all the properties around lae';
    }
    @Post()
    create(){
        return 'all the posted stuff';
    }
}
