import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './model/user.dto';

@Module({
  imports: [
    TypegooseModule.forFeature([User])
    // TypegooseModule.forFeature([OtherUser], 'other-mongodb') // for multiple connection (see app.module.ts:22)
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
