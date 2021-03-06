import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './interface/property.interface';

@Injectable()
export class PropertyService {
constructor(@InjectModel('Property') private readonly propertyModel: Model<Property>){}

async get():Promise<Property[]> {
    return await this.propertyModel.find();
}


async create(property:Property):Promise<Property>{
    const newProperty=new this.propertyModel(property);
    return await newProperty.save();
}
  

async update(id:string,property:Property):Promise<Property>{
    return await this.propertyModel.findByIdAndUpdate(id,property,{new:true});
 }
 
 
   async delete(id:string):Promise<Property>{
     return await this.propertyModel.findByIdAndRemove(id);
   }
}
