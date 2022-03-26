import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Nav from './Nav';
import Row from './Row';
import Movie from './types/Movie';
import moviedb from './moviedb/moviedb';
import Loading from './Loading';

function Home() {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(`${moviedb.URL}/movie/200`, {
        params: {
          api_key: moviedb.API_KEY,
        },
      });
      setMovie(response.data);
    };
    getMovie();
  }, []);
  if (!movie) return <Loading />;
  return (
    <>
      <Nav />
      <Header movie={movie} />
      {moviedb.endpoints.map((endpoint) => (
        <Row key={endpoint.name} title={endpoint.name} path={endpoint.path} />
      ))}
    </>
  );
}

export default Home;
