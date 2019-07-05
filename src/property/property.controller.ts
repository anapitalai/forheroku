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
        return this.propertyService.get();
    }
    @Post()
    create(@Body() createPropertyDTO:CreatePropertyDTO):Promise<Property>{
        return this.propertyService.create(createPropertyDTO);
    }

    @Put(':id')
    //@UseInterceptors(FileInterceptor('images'))
    async update(@Param('id') id,@Body() property:Property):Promise<Property>{
    console.log(property);
    return this.propertyService.update(id);
  }


    @Delete(':id')
    purge(@Param('id') id):Promise<Property> {
        return this.propertyService.delete(id);
    }

}
