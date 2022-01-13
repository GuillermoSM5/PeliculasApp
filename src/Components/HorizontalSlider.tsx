import React, {FunctionComponent} from 'react';
import {FlatList, Text, View} from 'react-native';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/movieDb';

interface HorizontalSliderProps {
  title: string;
  peliculasEnCine: Movie[] | undefined;
}

const HorizontalSlider: FunctionComponent<HorizontalSliderProps> = ({
  peliculasEnCine,
  title,
}: HorizontalSliderProps) => {
  return (
    <View style={{height: 265}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 5,
            marginLeft: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={peliculasEnCine}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
