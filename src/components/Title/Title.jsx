import React from 'react';
import './Title.scss';

export const Title = ({ title, name }) => {
  return (
    <h2 className='title' name={name}>
      { title }
    </h2>
  );
};
