import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';

export const paths = {
  HOME: '/',
  POKEDEX: '/pokedex',
};

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />
        <Route path={paths.POKEDEX} element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
