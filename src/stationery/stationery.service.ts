import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Stationery } from './interface/stationery.interface';

@Injectable()
export class StationeryService {
    constructor(@InjectModel('Stationery') private readonly stationeryModel: Model<Stationery>){}

async get():Promise<Stationery[]> {
    return await this.stationeryModel.find();
}


async create(property:Stationery):Promise<Stationery>{
    const newProperty=new this.stationeryModel(property);
    return await newProperty.save();
}
  

async update(id:string,property:Stationery):Promise<Stationery>{
    return await this.stationeryModel.findByIdAndUpdate(id,property,{new:true});
 }
 
 
   async delete(id:string):Promise<Stationery>{
     return await this.stationeryModel.findByIdAndRemove(id);
   }
}
