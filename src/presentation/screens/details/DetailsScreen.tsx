import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { useMovie } from '../../hooks/useMovie';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props ) => {

  const {movieId} = route.params;

  const {} = useMovie(movieId);
  return (
    <View>
        <Text>DetailsScreen </Text>
    </View>
  )
}