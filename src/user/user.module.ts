import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './model/user.dto';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
