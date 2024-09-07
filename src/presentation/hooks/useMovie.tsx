import React, { useEffect, useState } from 'react'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';

type Props = {}

export const useMovie = (movieId: number) => {

   const [isLoading, setIsLoading] = useState(false); 

   const [movie, setMovie] = useState<FullMovie>();

   useEffect(() => {
     loadMovie();
   }, [movieId])

   const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await UseCases.getMovieIdUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false);

    console.log(fullMovie);
    
   }
   

  return {
    isLoading,
    movie
  }
   
}