import { IsArray, IsDefined, IsString } from 'class-validator';
import { prop } from "@typegoose/typegoose";
import { ApiProperty } from '@nestjs/swagger';

export class Movie {
    @ApiProperty({
        type: String,
        description: 'The title of the movie',
        required: true
    })
    @IsDefined()
    @IsString()
    @prop({ required: true })
    title: string;

    @IsDefined()
    @IsArray()
    @prop({ required: true })
    genre: string[];
}