import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    images:String,
  
   created: { type: Date, default: Date.now },
});


UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const hashed = await bcrypt.hash(this['password'], 10);
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });
  