import { Injectable, Logger } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './model/user.dto';

@Injectable()
export class UserService {
    logger = new Logger(UserService.name);

    constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) { }

    create(user: User): Promise<User> {
        this.logger.log('User creating...');
        return this.userModel.create(user);
    }

    read(): Promise<User[]> {
        this.logger.log('Getting users...');
        return this.userModel.find().exec(); // .exec() nullifies the error and matches the return type "User[]"
    }

    readOne(_id: string): Promise<User> {
        return this.userModel.findById(_id).exec();
    }

    update(_id: string, user: User): Promise<User> {
        this.logger.log('User updating...');
        const filter = { _id };
        return this.userModel.findOneAndUpdate(filter, user, { new: true }).exec();
    }

    delete(_id: string): Promise<User> {
        this.logger.log('User deleting...');
        const filter = { _id };
        return this.userModel.findOneAndDelete(filter).exec();
    }
}
