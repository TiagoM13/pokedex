import React from 'react';

import {
  LoadingSkeleton,
  PokemonCard,
  Separate,
  ShowMoreButton,
} from '@components';
import { useGetPokemonsData, usePagination } from '@hooks';
import { IListPokemons, IPokemons } from '@interfaces';

export const ListPokemon = ({ data, handleSelectedId }: IListPokemons) => {
  const itemsPerPage = 20;
  const { loading: isLoadingData } = useGetPokemonsData();
  const { currentItems, showMoreItems, loadItems } = usePagination<IPokemons>({
    data,
    itemsPerPage,
  });

  const isLoading = isLoadingData || currentItems.length === 0;

  return (
    <>
      <Separate loading={isLoading} amount={data.length} />

      {isLoading ? (
        <div className="max-w-[1320px] grid grid-cols-6 gap-2 justify-items-center mt-8 px-2 mx-auto screen-5x:grid-cols-5 screen-4x:grid-cols-4 screen-3x:grid-cols-3 screen-2x:grid-cols-2 screen-1x:grid-cols-1 screen-1x:mx-5">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ul className="max-w-[1320px] grid grid-cols-6 gap-2 justify-items-center mt-8 px-2 mx-auto screen-5x:grid-cols-5 screen-4x:grid-cols-4 screen-3x:grid-cols-3 screen-2x:grid-cols-2 screen-1x:grid-cols-1 screen-1x:mx-5">
          {currentItems.map((pokemon) => {
            return (
              <PokemonCard
                getSelectedPokemon={() => handleSelectedId(pokemon.data.id)}
                key={pokemon.data.id}
                id={pokemon.data.id}
                name={pokemon.data.name}
                types={pokemon.data.types}
                url_img={
                  pokemon.data.sprites.other['official-artwork'].front_default
                }
              />
            );
          })}
        </ul>
      )}

      {currentItems.length < data.length && (
        <ShowMoreButton showMoreItems={showMoreItems} loadItems={loadItems} />
      )}
    </>
  );
};
