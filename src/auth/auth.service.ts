import { Injectable } from '@nestjs/common';
import { UserService } from '../shared/user/user.service';
import { Payload } from './interface/payload.interface';
import config from 'src/config/keys';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signPayload(payload: Payload) {
      return sign(payload, config.SECRET_KEY, { expiresIn: '12h' });
    }
  
    async validateUser(payload: Payload) {
      return await this.userService.findByPayload(payload);
    }
}
