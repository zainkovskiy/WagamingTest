import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter, setFilterType } from 'actions/ships';
import { classes } from 'assets/classes';
import './Filter.scss';

const shipIcon = 'https://glossary-wows-global.gcdn.co/icons/vehicle/contour_alive/PJSC037_783f772b192a73fd7de48c3a7e2ff296b7d9791cdd9bb38882d8464c0aa77e7f.png'
export const Filter = () => {
  const ships = useSelector((state) => state.ships.get('filter'));
  const dispatch = useDispatch()
  const getFilterType = (type) => {
    dispatch(type ? setFilterType(type) : resetFilter());
  }
  const getCountShips = (type) => {
    if (type) {
      return ships.filter(item => item.tags[0] === type).length;
    }
    return ships.length;
  }

  return (
    <div className='filter'>
      <div className='filter__item' onClick={() => getFilterType()}>
        <span className='filter__icon' style={{ backgroundImage: `url(${shipIcon})` }}></span>
        <span className='filter__text'>{getCountShips()}</span>
      </div>
      <div className='filter__item' onClick={() => getFilterType('Destroyer')}>
        <span className='filter__icon' style={{ backgroundImage: `url(${classes['Destroyer']})` }}></span>
        <span className='filter__text'>{getCountShips('Destroyer')}</span>
      </div>
      <div className='filter__item' onClick={() => getFilterType('Cruiser')}>
        <span className='filter__icon' style={{ backgroundImage: `url(${classes['Cruiser']})` }}></span>
        <span className='filter__text'>{getCountShips('Cruiser')}</span>
      </div>
      <div className='filter__item' onClick={() => getFilterType('Battleship')}>
        <span className='filter__icon' style={{ backgroundImage: `url(${classes['Battleship']})` }}></span>
        <span className='filter__text'>{getCountShips('Battleship')}</span>
      </div>
      <div className='filter__item' onClick={() => getFilterType('AirCarrier')}>
        <span className='filter__icon' style={{ backgroundImage: `url(${classes['AirCarrier']})` }}></span>
        <span className='filter__text'>{getCountShips('AirCarrier')}</span>
      </div>
    </div>
  );
};
