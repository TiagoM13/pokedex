import React from 'react';

import { usePagination } from '../../hooks/usePagination';
import { useGetPokemonsData } from '../../hooks/usePokemons';
import { ListProps } from '../../interfaces/list';
import { Pokemons } from '../../interfaces/pokemons';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { Loading } from '../Loading/Loading';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon = ({ data }: ListProps) => {
  const { loading } = useGetPokemonsData();
  const itemsPerPage = 20;
  const { currentItems, showMoreItems } = usePagination<Pokemons>({
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
        <ul className="grid grid-cols-6 gap-1 justify-items-center">
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

          {currentItems.length < data.length && (
            <button type="button" onClick={showMoreItems}>
              Mostrar mais
            </button>
          )}
        </ul>
      )}
    </div>
  );
};
