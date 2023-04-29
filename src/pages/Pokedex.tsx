import React from 'react';
import { Helmet } from 'react-helmet';

import { Button } from '@components/Button/Button';
import { DetailsCard } from '@components/DetailsCard/DetailsCard';
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { InputSearch } from '@components/InputSearch/InputSearch';
import { ListPokemon } from '@components/ListPokemon/ListPokemon';
import { ContentModal } from '@components/Modal/Modal';
import { useGetPokemonsData } from '@hooks/usePokemons';
import { useSelectPokemon } from '@hooks/useSelectPokemon';

const Pokedex: React.FC = () => {
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
            weight={itemDetails?.weight!}
            height={itemDetails?.height!}
            abilities={itemDetails?.abilities!}
            stats={itemDetails?.stats}
          />
        )}
      </ContentModal>

      <Button />
    </>
  );
};

export default Pokedex;
