import { Document } from 'mongoose';

export interface Stationery extends Document{
  id?:string; 
  name: string;
  type: string;
  price:number;
  images?:string;
  created: Date;
}