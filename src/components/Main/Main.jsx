import React from 'react';
import { Nav } from "components/Nav";
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <Nav />
      <Outlet/>
    </>
  );
};
