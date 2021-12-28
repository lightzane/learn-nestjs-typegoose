import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Movie } from './model/movie.dto';

@Module({
  imports: [TypegooseModule.forFeature([
    {
      typegooseClass: Movie,
      schemaOptions: {
        collection: 'film'
      }
    }
  ])],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule { }
