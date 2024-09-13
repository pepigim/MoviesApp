import { MovieDBCast } from "../interfaces/movie-db.response";
import { Cast } from '../../core/entities/cast.entity';


export class CastMapper {
    static fromMovieDBCastToEntity( actor : MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path 
            ? `https://image.tmdb.org/t/p/w500${ actor.profile_path }`
            : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}