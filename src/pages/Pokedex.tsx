import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Button,
  ContentModal,
  DetailsCard,
  Footer,
  Header,
  InputSearch,
  ListPokemon,
} from '@components';
import { PokemonProvider, usePokemonContext } from '@contexts';

const Pokedex = () => {
  const { itemDetails, selectedItemId } = usePokemonContext();

  return (
    <>
      <Helmet>
        <meta name="description" content="Pokemon list app" />
        <title>Pokédex - List Pokémon</title>
      </Helmet>

      <Header />

      <InputSearch />

      <ListPokemon />
      <Footer />

      <ContentModal>
        {selectedItemId && (
          <DetailsCard
            id={itemDetails?.id ?? 0}
            name={itemDetails?.name}
            types={itemDetails?.types}
            img={itemDetails?.sprites.other['official-artwork'].front_default}
            weight={itemDetails?.weight ?? 0}
            height={itemDetails?.height ?? 0}
            abilities={itemDetails?.abilities}
            stats={itemDetails?.stats}
          />
        )}
      </ContentModal>

      <Button />
    </>
  );
};

const PokedexContext = () => {
  return (
    <PokemonProvider>
      <Pokedex />
    </PokemonProvider>
  );
};

export { PokedexContext as Pokedex };
