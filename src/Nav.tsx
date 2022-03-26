import React, { useEffect, useState } from 'react';
import NavContainer from './Nav.styles';

export type NavContainerProps = {
  dark: boolean;
};

function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setDark(window.scrollY > 100);
    };
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <NavContainer dark={dark}>
      <img src="/netflix-logo.png" alt="Netflix" />
      <img src="/user-avatar.png" alt="Avatar" />
    </NavContainer>
  );
}

export default Nav;
