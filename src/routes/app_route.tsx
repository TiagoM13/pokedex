import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Loading } from '../components/Loading/Loading';

const Home = React.lazy(() => import('../pages/Home'));
const Pokedex = React.lazy(() => import('../pages/Pokedex'));

export const paths = {
  HOME: '/',
  POKEDEX: '/pokedex',
};

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.HOME}
          element={
            <React.Suspense
              fallback={
                <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
                  <Loading title_page="homepage" />
                </div>
              }
            >
              <Home />
            </React.Suspense>
          }
        />
        <Route path={paths.POKEDEX} element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
