import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreemLoader } from '../../components/loader/FullScreemLoader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props ) => {

  const {movieId} = route.params;

  const { isLoading, movie, cast=[] } = useMovie(movieId);

  if( isLoading ){
    return <FullScreemLoader/>
  }
  return (
    <ScrollView>
        {/* Header */}
        <MovieHeader 
          originalTitle={ movie?.originalTitle}
          title={ movie?.title}
          poster={ movie?.poster}

        />

        {/* Header */}
        <MovieDetails movie={ movie! } cast={cast}/>



    </ScrollView>
  )
}