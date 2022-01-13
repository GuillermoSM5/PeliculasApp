import {StackScreenProps} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useMovies} from '../Hooks/useMovies';
import {useMovieDetails} from '../Hooks/useMovieDetail';
import MovieDetails from '../Components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const screenHeigth = Dimensions.get('screen').height;

interface DetailsMovieProps
  extends StackScreenProps<RootStackParams, 'DetailsMovie'> {}

const DetailsMovie: FunctionComponent<DetailsMovieProps> = ({
  route,
  navigation,
}: DetailsMovieProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={40} color={'gray'} style={{marginTop: 10}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color="white" name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsMovie;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeigth * 0.7,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,

    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  posterImage: {flex: 1},
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
