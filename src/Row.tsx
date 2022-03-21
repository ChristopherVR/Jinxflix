import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import MovieType from './enums/movieType';
import firebase from './firebase/firebase';

type RowProps = {
  movieType: MovieType;
  title: string;
};

// TODO: map vars?
interface Movie {
  original_name: string;
  poster_path: string;
}
function Row({ movieType, title }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const leafRoot = 'movies';
  const fetchMovies = (type: MovieType) => {
    // TODO: map MovieType to string
    const movieRef = ref(firebase.database, `${leafRoot}/${type}`);
    onValue(movieRef, (snapshot) => {
      if (snapshot) {
        // update "movies" state by calling "setMovies" function.
        setMovies(snapshot.val());
      }
    });
  };

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
