import React from 'react';

import { Header } from './components/Header';
import PokedexList from './pages/Pokedex';

const App = () => {
  return (
    <>
      <Header />
      <PokedexList />
    </>
  );
};

export default App;
