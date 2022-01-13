import React, {FunctionComponent} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {Cast, Movie, MovieFull} from '../interfaces/movieDb';
import CastItem from './Castitem';

interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails: FunctionComponent<MovieDetailsProps> = ({
  movieFull,
  cast,
}: MovieDetailsProps) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Icon name="star" color="grey" size={20} />
          <Text style={{color: 'grey'}}> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5, color: 'grey'}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: any) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 280}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
