import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity )
        

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - UpcomingUseCase');
    }
}