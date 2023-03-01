import React from 'react';
import './Nav.scss';
import { Logo } from 'components/Logo';
import { Language } from 'components/Language';

export const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav__wrap container">
        <Logo />
        <Language/>
      </div>
    </div>
  );
};
