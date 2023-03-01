import React from 'react';
import './Headline.scss';

export const Headline = ({ headline }) => {
  return (
    <h2 className='headline'>
      {headline}
    </h2>
  );
};
