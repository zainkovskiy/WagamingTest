import React from 'react';
import LogoImg from 'images/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to='/'>
      <LogoImg/>
    </Link>
    );
};
