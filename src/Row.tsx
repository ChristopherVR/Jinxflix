import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MoviesContainer,
  MoviesPoster,
  MoviesRow,
  MoviesTitle,
} from './Row.styles';
import Movie from './types/Movie';
import moviedb from './moviedb/moviedb';

type RowProps = {
  path: string;
  title: string;
};

const imageUrl = 'https://image.tmdb.org/t/p/w300';

function Row({ path, title }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  // Fetching movies using firebase
  // const leafRoot = 'movies';
  // const fetchMovies = (type: string) => {
  //   const movieRef = ref(firebase.database, `${leafRoot}/${type}`);
  //   onValue(movieRef, (snapshot) => {
  //     if (snapshot) {
  //       // update "movies" state by calling "setMovies" function.
  //       setMovies(snapshot.val());
  //     }
  //   });
  // };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`${moviedb.URL}${path}`, {
        params: {
          api_key: moviedb.API_KEY,
        },
      });

      setMovies(response.data.results);
    };
    getMovies();
  }, [path]);

  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => (
          <MoviesPoster
            key={movie.id}
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Row;
