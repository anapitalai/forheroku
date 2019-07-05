import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../shared/user/user.module';

@Module({
    imports: [UserModule ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
