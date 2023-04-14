import React from 'react';

import { Loading } from '@components/Loading/Loading';
import { PokemonCard } from '@components/PokemonCard/PokemonCard';
import { ShowMoreButton } from '@components/ShowMoreButton/ShowMoreButton';
import { usePagination } from '@hooks/usePagination';
import { useGetPokemonsData } from '@hooks/usePokemons';
import { ListProps } from '@interfaces/list';
import { IPokemons } from '@interfaces/pokemons';

export const ListPokemon = ({ data, handleSelectedId }: ListProps) => {
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
        <ul className="grid grid-cols-6 gap-1 justify-items-center mt-8">
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
