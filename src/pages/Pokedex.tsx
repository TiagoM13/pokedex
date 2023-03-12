import React from 'react';
import { Helmet } from 'react-helmet';

import { CardDetails } from '../components/CardDetails/CardDetails';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { ListPokemon } from '../components/ListPokemon';
import { ContentModal } from '../components/Modal';
import { useGetPokemonsData } from '../hooks/usePokemons';
import { useSelectPokemon } from '../hooks/useSelectPokemon';

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
          <CardDetails
            id={itemDetails?.id}
            name={itemDetails?.name}
            types={itemDetails?.types}
            img={itemDetails?.sprites.other['official-artwork'].front_default}
            weight={itemDetails?.weight!}
            height={itemDetails?.height!}
            abilities={itemDetails?.abilities!}
          />
        )}
      </ContentModal>
    </>
  );
};

export default Pokedex;
