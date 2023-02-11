import React from 'react';

import { useGetPokemonsData } from '../../hooks/usePokemons';
import { ListProps } from '../../interfaces/list';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { Loading } from '../Loading/Loading';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon = ({ pokemons }: ListProps) => {
  const { loading } = useGetPokemonsData();

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Loading title_page="pokemon list" />
        </div>
      ) : (
        <ul className="grid grid-cols-6 gap-1 justify-items-center">
          {pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.data.order}
                order={pokemon.data.order}
                name={getFirstLetterCapitalized(pokemon.data.name)}
                skills={{
                  skill_1: pokemon.data.abilities[0]?.ability.name,
                  skill_2: pokemon.data.abilities[1]?.ability.name,
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
    </div>
  );
};
