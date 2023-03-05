import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { ListPokemon } from '../components/ListPokemon';
import { useGetPokemonsData } from '../hooks/usePokemons';

const Pokedex: React.FC = () => {
  const { pokemons, FilterPokemon } = useGetPokemonsData();

  return (
    <>
      <Helmet>
        <meta name="description" content="Pokemon list app" />
        <title>Pokédex - List Pokémon</title>
      </Helmet>

      <Header getFilterPokemon={FilterPokemon} />
      <ListPokemon data={pokemons} />
      <Footer />
    </>
  );
};

export default Pokedex;
