import React, { useEffect, useState } from 'react'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';

type Props = {}

export const useMovie = (movieId: number) => {

   const [isLoading, setIsLoading] = useState(false); 
   const [movie, setMovie] = useState<FullMovie>();
   const [cast, setCast] = useState<Cast[]>()


   useEffect(() => {
     loadMovie();
   }, [movieId])


   const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieIdUseCase(movieDBFetcher, movieId);
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId); 

    const [ fullMovie, cast] = await Promise.all([ fullMoviePromise, castPromise ]);

    setMovie(fullMovie);
    setCast( cast );
    
    setIsLoading(false);
    
   }
   

  return {
    isLoading,
    movie,
    cast,
  }
   
}