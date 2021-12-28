import { Body, Controller, Param, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MyCustomPipe } from '../my-custom.pipe';
import { Movie } from './model/movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
@ApiTags('movie')
export class MovieController {

    constructor(private readonly movieService: MovieService) { }

    @Post('create')
    create(@Body() movie: Movie): Promise<Movie> {
        return this.movieService.create(movie);
    }

    @Post('test/:id')
    @ApiOperation({
        summary: 'Test Pipes',
        description: 'Use this endpoint to test a pipe. Give 2 or 3 as the id and you will get a string. Else, a number',
    })
    @ApiParam({
        name: 'id',
        description: 'Pass a number. 2 or 3 will return string'
    })
    @ApiResponse({
        status: 201,
        description: 'Returns a string or number'
    })
    testNumber(@Param('id', MyCustomPipe) id: string): string {
        return id;
    }

}
