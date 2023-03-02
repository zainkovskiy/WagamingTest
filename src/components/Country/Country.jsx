import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCountry, resetFilter } from 'actions/ships';
import { CountryHead } from 'components/CountryHead';
import { CardShip } from 'components/CardShip';
import { Title } from 'components/Title';
import { ButtonUp } from 'components/ButtonUp';
import { level } from 'assets/levels';
import './Country.scss';

export const Country = () => {
  const { flag } = useParams();
  const ships = useSelector((state) => state.ships.get('filterCountry'));
  const dispatch = useDispatch();
  let defaultLevel = 0;

  useEffect(() => {
    getFiltredShips();
  }, [])

  const getFiltredShips = () => {
    dispatch(setFilterCountry(flag));
    dispatch(resetFilter(flag));
  }
  return (
    <>
      <div className='container' name='country-top'>
        <div className='country'>
          <CountryHead/>
          {
            ships.map((ship, idx) => {
              if (defaultLevel === ship.level) {
                return <CardShip key={idx} ship={ship} />
              } else {
                defaultLevel = ship.level;
                return <React.Fragment key={idx}>
                  <Title title={`Level ${level[ship.level]} `} name={`level${ship.level}`}/>
                  <CardShip key={idx} ship={ship} />
                </React.Fragment>
              }
            })
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