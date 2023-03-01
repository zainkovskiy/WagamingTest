import React from 'react';
import { Link } from 'react-scroll';
import { useWindowScroll } from 'hooks/windowScroll';
import './ButtonUp.scss'

export const ButtonUp = (props) => {
  const scroll = useWindowScroll();
  
  return (
    <Link
      className='button-up'
      spy={false}
      smooth={true}
      duration={500}
      {...props}
      style={{opacity: `${scroll ? 1 : 0}`}}
    >
      <div className='button-up__icon_wrap'>
        <div className='button-up__icon'></div>
      </div>
    </Link>
  );
};
