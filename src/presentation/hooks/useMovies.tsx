import { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases';


export const useMovies = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
   const [popular, setPopular] = useState<Movie[]>([]);
   const [topRated, setTopRated] = useState<Movie[]>([]);
   const [upcoming, setupcoming] = useState<Movie[]>([]);

   
   useEffect(() => {
    initialLoad();
   }, [])

   const initialLoad = async () => {

     const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
     const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher); 
     const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher); 
     const upcomingPromise = await UseCases.moviesUpcomingUseCase(movieDBFetcher); 

     const [
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
     ] = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
     ]);

     setNowPlaying( nowPlayingMovies );
     setPopular( popularMovies );
     setTopRated( topRatedMovies );
     setupcoming( upcomingMovies );

     setIsLoading( false);

     console.log( nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies);
     


   };
   
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

  }
}
