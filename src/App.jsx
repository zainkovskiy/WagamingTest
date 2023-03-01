import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './_base.scss';
import { loadShips } from 'actions/ships';
import { routes } from "./routes";

import { Nav } from 'components/Nav';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShips());
  }, [])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
};
