import React from 'react';
import { flags } from 'assets/flags';
import { FlagLink } from 'components/FlagLink';
import { Headline } from 'components/Headline';
import './Flags.scss';

export const Flags = () => {
  return (
    <div className='container'>
      <Headline headline='nation' />
      <div className='flags'>
        {
          flags.map((flag, idx) =>
            <FlagLink
              key={idx}
              flag={flag}
            />
          )
        }
      </div>
    </div>
  );
};

