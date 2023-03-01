import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CountryHead } from 'components/CountryHead';
import { ButtonUp } from 'components/ButtonUp';
import { Level } from 'components/Level';
import './Country.scss';

export const Country = () => {
  const { flag } = useParams();
  const location = useLocation();
  const ships = useSelector((state) => state.ships.get('ships').filter(item => item.nation === flag));
  const sortedShips = useRef([]);
  const sortShips = () => {
    let level = 1;
    while (level <= 11) {
      if (ships.find((ship) => ship.level === level)) {
        let test = {
          level: level,
          ships: []
        }
        for (let ship of ships) {
          ship.level === level && test.ships.push(ship);
        }
        sortedShips.current = [...sortedShips.current, test];
      }
      level++;
    }
  };
  sortShips();
  return (
    <>
      <div className='container' name='country-top'>
        <div className='country'>
          <CountryHead
            url={location.state.url}
            sortedShips={sortedShips.current}
            currentFlag={flag}
          />
          {
            sortedShips.current.map((item, idx) =>
              <Level
                key={idx}
                item={item}
              />
            )
          }
        </div>
      </div>
      <ButtonUp 
        to='country-top'
        offset={-70}
      />
    </>
  );
};
