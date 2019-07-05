import { Controller, Post, Body, UseInterceptors, UploadedFile, Put, Param } from '@nestjs/common';
import { UserService } from 'src/shared/user/user.service';
import { AuthService } from './auth.service';
import { Payload } from './interface/payload.interface';
import {CreateLoginDTO} from '../auth/dto/login.dto';
import {CreateRegisterDTO} from '../auth/dto/register.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
      ) {}
    
      @Post('login')
      async login(@Body() userDTO: CreateLoginDTO) {
        const user = await this.userService.findByLogin(userDTO);
        const payload: Payload = {
          username: user.username,
          seller: user.seller,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
      }
    
      @Post('register')
      //@UseInterceptors(FileInterceptor('image'))
      async register(@Body() userDTO: CreateRegisterDTO) {
        const user = await this.userService.create(userDTO);
        const payload: Payload = {
          username: user.username,
          image: user.image,
          seller: user.seller,
    
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
      }
    
    
      @Put('update/:id')
     // @UseInterceptors(FileInterceptor('image'))
      async update(@Param('id') id,@Body() registerDTO:CreateRegisterDTO){
       // console.log(file.path,'from update endpoint from controller');
       // const imagePath = file.path;
        //const {image} = registerDTO;
      
      return this.userService.update(id,registerDTO);
    }
    
}
