import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovie } from "../../entities/movie.entity";
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastructure/mapper/movie.mapper';


export const getMovieIdUseCase =async (
    fetcher: HttpAdapter, 
    movieId: number
    ): Promise<FullMovie> => {
    
        try {
            const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);
            const fullMovie = MovieMapper.fromMovieDBtoEntity( movie);
            return fullMovie;
            
        } catch (error) {
            throw new Error(`Cannot get movie by id: ${ movieId }`)
        }
    
}