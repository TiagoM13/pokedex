import React from 'react';

import { Header } from '../components/Header';
import { ListPokemon } from '../components/ListPokemon';

const PokedexList: React.FC = () => {
  return (
    <>
      <Header />
      <ListPokemon />
    </>
  );
};

export default PokedexList;
