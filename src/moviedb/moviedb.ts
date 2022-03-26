const URL = 'https://api.themoviedb.org/3';
const endpoints = [
  {
    name: 'Netflix Originals',
    path: '/discover/tv',
  },
  {
    name: 'Trending',
    path: '/trending/all/week',
  },
  {
    name: 'Now Playing',
    path: '/movie/now_playing',
  },
  {
    name: 'Popular',
    path: '/movie/popular',
  },
  {
    name: 'Top Rated',
    path: '/movie/top_rated',
  },
  {
    name: 'Upcoming',
    path: '/movie/upcoming',
  },
];

export default {
  API_KEY: process.env.REACT_APP_MOVIEDB_API_KEY,
  endpoints,
  URL,
};
