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
import { useGetPokemonsData, useSelectPokemon } from '@hooks';

const Pokedex = () => {
  const { pokemons, FilterPokemon } = useGetPokemonsData();
  const {
    active,
    itemDetails,
    handleSelected,
    selectedItemId,
    handleOnToggleModal,
  } = useSelectPokemon();

  return (
    <>
      <Helmet>
        <meta name="description" content="Pokemon list app" />
        <title>Pokédex - List Pokémon</title>
      </Helmet>

      <Header />

      <InputSearch getFilterPokemon={FilterPokemon} />

      <ListPokemon data={pokemons} handleSelectedId={handleSelected} />
      <Footer />

      <ContentModal active={active} onCloseModal={handleOnToggleModal}>
        {selectedItemId && (
          <DetailsCard
            id={itemDetails?.id}
            name={itemDetails?.name}
            types={itemDetails?.types}
            img={itemDetails?.sprites.other['official-artwork'].front_default}
            weight={itemDetails?.weight}
            height={itemDetails?.height}
            abilities={itemDetails?.abilities}
            stats={itemDetails?.stats}
          />
        )}
      </ContentModal>

      <Button />
    </>
  );
};

export { Pokedex };
