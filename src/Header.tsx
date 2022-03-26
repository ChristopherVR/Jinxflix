import React from 'react';
import {
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
} from './Header.styles';

import Movie from './types/Movie';

export type HeaderProps = {
  movie: Movie;
};

function Header({ movie }: HeaderProps) {
  return (
    <HeaderContainer
      background={movie.backdrop_path}
      name=""
      poster_path=""
      backdrop_path=""
      overview=""
    >
      <HeaderTitle>{movie.name}</HeaderTitle>
      <HeaderDescription>{movie.overview}</HeaderDescription>
      <HeaderButton>Play</HeaderButton>
      <HeaderButton>My List</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;
