import React from 'react';

import {
  LoadingSkeleton,
  PokemonCard,
  Separator,
  ShowMoreButton,
} from '@components';
import { usePokemonContext, usePagination } from '@hooks';
import { IPokemons } from '@interfaces';

interface Props {
  query: string;
}

export const ListPokemon = ({ query }: Props) => {
  const { loading, pokemons } = usePokemonContext();

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.data.name?.toLowerCase().includes(query.toLowerCase())
  );

  const itemsPerPage = 20;
  const { currentItems, showMoreItems, loadItems } = usePagination<IPokemons>({
    data: filteredPokemons,
    itemsPerPage,
  });

  const isLoading = loading || currentItems.length === 0;

  return (
    <>
      <Separator data={filteredPokemons} />

      {filteredPokemons.length === 0 && !isLoading && (
        <span>Not found pokemon</span>
      )}

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

      {!isLoading &&
        currentItems.length < pokemons.length &&
        filteredPokemons && (
          <ShowMoreButton showMoreItems={showMoreItems} loadItems={loadItems} />
        )}
    </>
  );
};
