import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, Pokedex } from '@pages';

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

export { router };
