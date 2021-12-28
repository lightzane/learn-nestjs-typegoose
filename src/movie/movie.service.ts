import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Movie } from './model/movie.dto';

@Injectable()
export class MovieService {

    constructor(@InjectModel(Movie) private readonly movieModel: ReturnModelType<typeof Movie>) { }

    create(movie: Movie): Promise<Movie> {
        return this.movieModel.create(movie);
    }

}
