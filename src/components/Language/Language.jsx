import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageList } from 'assets/language';
import { setLanguage } from 'actions/language';
import './Language.scss';

export const Language = () => {
  const language = useSelector((state) => state.language.get('language'));
  const dispatch = useDispatch();
  const chanheLanguage = (selectLanguage) => {
    dispatch(setLanguage(selectLanguage));
  }
  return (
    <div className='language'>
      <span className='language__text language__text_select'>
        {language}
      </span>
      <div className='language__change'>
        {
          languageList.map((item, idx) =>
            <span 
            onClick={() => chanheLanguage(item)}
            className='language__text language__text_change' 
            key={idx}>{item}</span>
          )
        }
      </div>
    </div>
  );
};
