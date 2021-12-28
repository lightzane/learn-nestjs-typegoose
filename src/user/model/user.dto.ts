import { IsDefined, IsEmail } from 'class-validator';
import { prop } from "@typegoose/typegoose";

export class User {
    @IsDefined()
    @prop({ required: true })
    name: string;

    @IsDefined()
    @IsEmail()
    @prop({ required: true })
    email: string;
}