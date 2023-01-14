/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';

import { Header } from '../components/Header';
import { ListPokemon } from '../components/ListPokemon';
import { POKEMONS } from '../database/data';

const PokedexList: React.FC = () => {
  const [data, setData] = useState(POKEMONS);

  const onFilterPokemon = (name: string) => {
    const filteredPokemons = [];

    for (const i in POKEMONS) {
      if (POKEMONS[i].name.includes(name)) {
        filteredPokemons.push(POKEMONS[i]);
      }
    }

    return setData(filteredPokemons);
  };

  return (
    <>
      <Header onFilterPokemon={onFilterPokemon} />
      <ListPokemon />
    </>
  );
};

export default PokedexList;
