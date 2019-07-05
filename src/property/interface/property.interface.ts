import { Document } from 'mongoose';

export interface Property extends Document{
  id?:string; 
  name: string;
  proptype: string;
  price:number;
  images?:string;
  created: Date;
}