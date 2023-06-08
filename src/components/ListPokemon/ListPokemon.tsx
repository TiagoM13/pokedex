import React from 'react';

import {
  LoadingSkeleton,
  PokemonCard,
  Separator,
  ShowMoreButton,
} from '@components';
import { usePokemonContext } from '@contexts';
import { usePagination } from '@hooks';
import { IPokemons } from '@interfaces';

export const ListPokemon = () => {
  const { loading, pokemons } = usePokemonContext();
  const itemsPerPage = 20;
  const { currentItems, showMoreItems, loadItems } = usePagination<IPokemons>({
    data: pokemons,
    itemsPerPage,
  });

  const isLoading = loading || currentItems.length === 0;

  return (
    <>
      <Separator />

      {isLoading ? (
        <div className="mx-auto mt-8 grid max-w-[1320px] grid-cols-6 justify-items-center gap-2 px-2 screen-5x:grid-cols-5 screen-4x:grid-cols-4 screen-3x:grid-cols-3 screen-2x:grid-cols-2 screen-1x:mx-5 screen-1x:grid-cols-1">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ul className="mx-auto mt-8 grid max-w-[1320px] grid-cols-6 justify-items-center gap-2 px-2 screen-5x:grid-cols-5 screen-4x:grid-cols-4 screen-3x:grid-cols-3 screen-2x:grid-cols-2 screen-1x:mx-5 screen-1x:grid-cols-1">
          {currentItems.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.data.id} />;
          })}
        </ul>
      )}

      {currentItems.length < pokemons.length && (
        <ShowMoreButton showMoreItems={showMoreItems} loadItems={loadItems} />
      )}
    </>
  );
};
