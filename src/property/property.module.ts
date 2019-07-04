import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertySchema } from './schema/property.schema';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';


@Module({
    imports:[MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }])],
    controllers: [PropertyController],
    exports:[PropertyService],
    providers: [PropertyService],
})
export class PropertyModule {
    async get(){
        //return await this.model.find();
    }
}
