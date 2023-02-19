import React from 'react';

import { usePagination } from '../../hooks/usePagination';
import { useGetPokemonsData } from '../../hooks/usePokemons';
import { ListProps } from '../../interfaces/list';
import { IPokemons } from '../../interfaces/pokemons';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { Loading } from '../Loading/Loading';
import { PokemonCard } from '../PokemonCard';
import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton';

export const ListPokemon = ({ data }: ListProps) => {
  const itemsPerPage = 20;
  const { loading } = useGetPokemonsData();
  const { currentItems, showMoreItems, loadItems } = usePagination<IPokemons>({
    data,
    itemsPerPage,
  });

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Loading title_page="pokemon list" />
        </div>
      ) : (
        <ul className="grid grid-cols-6 gap-1 justify-items-center mt-8">
          {currentItems.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.data.order}
                order={pokemon.data.order}
                name={getFirstLetterCapitalized(pokemon.data.name)}
                abilities={{
                  ability_1: pokemon.data.abilities[0]?.ability.name,
                  ability_2: pokemon.data.abilities[1]?.ability.name,
                }}
                types={{
                  type_1: pokemon.data.types[0].type.name,
                  type_2: pokemon.data.types[1]?.type.name,
                }}
                url_img={pokemon.data.sprites.front_default}
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
