import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserService } from '../../shared/user/user.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from '../http-exception.filter';
import { LoggingInterceptor } from '../logging.interceptor';

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    providers: [
      UserService,
      {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
      },
      {
        provide: APP_INTERCEPTOR,
        useClass: LoggingInterceptor,
      }],
    exports: [UserService],
})
export class UserModule {}
