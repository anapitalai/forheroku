export interface User extends Document {
    username: string;
    readonly password: string;
    image:string;
    created: Date;
  }
  