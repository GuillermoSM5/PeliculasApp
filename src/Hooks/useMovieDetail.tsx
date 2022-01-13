import {useState, useEffect} from 'react';
import movieDB from '../Api/MoivieDB';
import {MovieFull, CreditResponse, Cast} from '../interfaces/movieDb';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const MovieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const CreditsPromise = await movieDB.get<CreditResponse>(
      `/${movieId}/credits`,
    );

    const [responseDetail, responseCredits] = await Promise.all([
      MovieDetailPromise,
      CreditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: responseDetail.data,
      cast: responseCredits.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
