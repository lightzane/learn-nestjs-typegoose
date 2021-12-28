import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './model/user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {

    logger: Logger;

    constructor(private readonly userService: UserService) {
        this.logger = new Logger(UserController.name, { timestamp: true });
    }

    @Post('create')
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Get()
    readAll(): Promise<User[]> {
        return this.userService.read();
    }

    @Get(':userId')
    readOne(@Param('userId') userId: string): Promise<User> {
        return this.userService.readOne(userId);
    }

    @Patch('update/:userId')
    update(@Body() user: User, @Param('userId') userId: string): Promise<User> {
        return this.userService.update(userId, user);
    }

    @Delete(':userId')
    delete(@Param('userId') userId: string) {
        return this.userService.delete(userId);
    }
}
