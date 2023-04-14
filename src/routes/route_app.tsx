import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Pokedex from '@pages/Pokedex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Pokedex',
    element: <Pokedex />,
  },
]);

export default router;
