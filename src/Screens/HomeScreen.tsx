import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent, useContext} from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../Components/GradienteBackground';
import HorizontalSlider from '../Components/HorizontalSlider';
import MoviePoster from '../Components/MoviePoster';
import {useMovies} from '../Hooks/useMovies';
import {getImageColors} from '../Helpers/getColores';
import {GradientContext} from '../context/GradientConext';
import {useEffect} from 'react';

const {width: windowWidth} = Dimensions.get('window');

interface HomeScreemProps {}

const HomeScreem: FunctionComponent<HomeScreemProps> = () => {
  const navigation = useNavigation();
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setColorsFun} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setColorsFun({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carrousel Principal*/}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas populares */}
          <HorizontalSlider peliculasEnCine={popular} title="Populares" />
          <HorizontalSlider
            peliculasEnCine={topRated}
            title="Mejores Calificadas"
          />
          <HorizontalSlider
            peliculasEnCine={upComing}
            title="Proximas a Estrenarse"
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreem;
