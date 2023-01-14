import React from 'react';

import { Header } from '../components/Header';
import { ListPokemon } from '../components/ListPokemon';
import { useGetPokemonsData } from '../hooks/usePokemons';

const PokedexList: React.FC = () => {
  const { pokemons, FilterPokemon } = useGetPokemonsData();

  return (
    <>
      <Header getFilterPokemon={FilterPokemon} />
      <ListPokemon pokemons={pokemons} />
    </>
  );
};

export default PokedexList;
