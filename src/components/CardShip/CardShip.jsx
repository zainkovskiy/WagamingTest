import React from 'react';
import { useSelector } from 'react-redux';
import { classes } from 'assets/classes';
import premium from 'images/premium.png';
import './CardShip.scss';

export const CardShip = ({ ship }) => {
  const lng = useSelector((state) => state.language.get('language'));
  const getPremium = () => {
    if (ship.tags.includes('premium')) {
      return <span className='card__prem' style={{backgroundImage: `url(${premium})`}}></span>
    }
  }
  return (
    <div className='card'>
      <span className='card__title'>{ship.localization.mark[lng]}</span>
      <div className='card__wrap'>
        <div className='card__img_wrap'>
          <img className='card__img' src={`https://glossary-wows-global.gcdn.co/icons/${ship.icons.large}`} alt="ship" />
          {
            getPremium()
          }
        </div>
        <div>
          <p className='card__description'>{ship.localization.description[lng]}</p>
          <span className='card__line'></span>
          <div>
            <img src={classes[ship.tags[0]]} alt="class" className="card__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
