import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { ListPokemon } from '../components/ListPokemon';
import { useGetPokemonsData } from '../hooks/usePokemons';

const PokedexList: React.FC = () => {
  const { pokemons, FilterPokemon } = useGetPokemonsData();

  return (
    <>
      <Header getFilterPokemon={FilterPokemon} />
      <ListPokemon data={pokemons} />
      <Footer />
    </>
  );
};

export default PokedexList;
