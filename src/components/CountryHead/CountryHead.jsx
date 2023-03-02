import React from 'react';
import { Link } from 'react-scroll';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter';
import './CountryHead.scss';
import { level } from 'assets/levels';


export const CountryHead = () => {
  const location = useLocation();
  const { flag } = useParams();
  const ships = useSelector((state) => state.ships.get('filterCountry'));
  let defaultLevel = 0;
  return (
    <div
      className='country-head'
      style={{ backgroundImage: `url(${location.state.url})` }}
    >
      <div className='country-head__right'>
        <span className='country-head__title'>{flag}</span>
        <div className='country-head__buttons'>
          <div className='country-head__links'>
            {
              ships.map((ship, idx) => {
                if (defaultLevel === ship.level) {
                  return
                } else {
                  defaultLevel = ship.level;
                  return <Link
                    key={idx}
                    className='country-head__link'
                    to={`level${ship.level}`}
                    spy={false}
                    offset={-70}
                    smooth={true}
                    duration={500}
                  >
                    {level[ship.level]}
                  </Link>
                }
              }
              )
            }
          </div>
          <Filter />
        </div>
      </div>
    </div>
  );
};