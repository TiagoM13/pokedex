import React from 'react';

import { POKEMONS } from '../../database/data';
import { ListProps } from '../../interfaces/list';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon = ({ pokemons }: ListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-6 gap-1 justify-items-center">
        {POKEMONS.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.order}
              order={pokemon.order}
              name={getFirstLetterCapitalized(pokemon.name)}
              skills={{
                skill_1: pokemon.skills?.skill_1,
                skill_2: pokemon.skills?.skill_2,
              }}
              types={{
                type_1: pokemon.types.type_1,
                type_2: pokemon.types?.type_2,
              }}
              url_img={pokemon.url_img}
            />
          );
        })}
      </ul>
    </div>
  );
};
