import React from 'react';

import { useGetPokemonsData, usePagination } from '@hooks';
import { IListPokemons, IPokemons } from '@interfaces';

import { Loading, PokemonCard, ShowMoreButton } from '..';

export const ListPokemon = ({ data, handleSelectedId }: IListPokemons) => {
  const itemsPerPage = 20;
  const { loading } = useGetPokemonsData();
  const { currentItems, showMoreItems, loadItems } = usePagination<IPokemons>({
    data,
    itemsPerPage,
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ul className="max-w-[1320px] grid grid-cols-6 gap-2 justify-items-center mt-8 px-2 mx-auto">
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
    </div>
  );
};
