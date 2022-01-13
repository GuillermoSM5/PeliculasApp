import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'cc59cfd846e8b11876cca1b5fbf1d87b',
    language: 'es-ES',
  },
});

export default movieDB;
