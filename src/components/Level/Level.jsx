import React from 'react';
import { Title } from 'components/Title';
import { CardShip } from 'components/CardShip';
import { level } from 'assets/levels';
import './Level.scss';

export const Level = ({ item }) => {
  return (
    <>
      <Title
        title={`Level ${level[item.level]} `}
        name={`level${item.level}`}
      />
      <div className='level-ships'>
        {
          item.ships.map((ship, idx) => (
            <CardShip
              key={idx}
              ship={ship}
            />
          ))
        }
      </div>
    </>
  );
};
