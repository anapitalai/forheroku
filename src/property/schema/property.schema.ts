
import * as mongoose from 'mongoose';

export const PropertySchema = new mongoose.Schema({
    name: String,
    proptype: String,
    price:Number,
    images:{
      type:Array,
      default:false,
    },
  
   created: { type: Date, default: Date.now },
});