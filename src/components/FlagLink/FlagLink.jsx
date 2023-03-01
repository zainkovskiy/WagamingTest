import React from 'react';
import { Link } from 'react-router-dom';
import './FlagLink.scss';

export const FlagLink = ({ flag }) => {
  return (
    <Link to={`country/${flag.name}`} state={{url: flag.url}}>
      <img
        style={{ width: `${flag?.width ? flag.width : ''}` }}
        className='flag-link' src={flag.url} alt="flag" />
    </Link>
  );
};
