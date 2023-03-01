import React from 'react';
import { Link } from 'react-scroll';
import './CountryHead.scss';
import { level } from 'assets/levels';

export const CountryHead = ({ url, sortedShips, currentFlag }) => {
  return (
    <div
      className='country-head'
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className='country-head__right'>
        <span className='country-head__title'>{currentFlag}</span>
        <div className='country-head__links'>
          {
            sortedShips.map((item, idx) =>
              <Link
                key={idx}
                className='country-head__link'
                to={`level${item.level}`}
                spy={false}
                offset={-70}
                smooth={true}
                duration={500}
              >
                {level[item.level]}
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};
