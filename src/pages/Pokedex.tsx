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
import { PokemonProvider, SelectedPokemonProvider } from '@contexts';
import { useSelectedPokemonContext } from '@hooks';

const Pokedex = () => {
  const [query, setQuery] = React.useState('');
  const { itemDetails, selectedItemId } = useSelectedPokemonContext();

  return (
    <>
      <Helmet>
        <meta name="description" content="Pokemon list app" />
        <title>Pokédex - List Pokémon</title>
      </Helmet>

      <Header />

      <InputSearch onChange={setQuery} query={query} />

      <ListPokemon query={query} />
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
      <SelectedPokemonProvider>
        <Pokedex />
      </SelectedPokemonProvider>
    </PokemonProvider>
  );
};

export { PokedexContext as Pokedex };
