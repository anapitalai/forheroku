import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './interface/property.interface';

@Injectable()
export class PropertyService {
    //constructor(@InjectModel('Property') private readonly propertyModel: Model<Property>){}

}
