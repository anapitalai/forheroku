export interface User extends Document {
    [x: string]: any;
    username: string;
    readonly password: string;
    image:string;
    created: Date;
  }
  