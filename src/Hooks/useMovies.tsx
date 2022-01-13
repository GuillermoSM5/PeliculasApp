import {useEffect, useState} from 'react';
import movieDB from '../Api/MoivieDB';
import {MovieDBResponse, Movie} from '../interfaces/movieDb';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upComingPromise = movieDB.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    //nowPlaying
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
