import React from 'react';

import { ListProps } from '../../interfaces/list';
import { getFirstLetterCapitalized } from '../../utils/getFirstLetterCapitalized';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon = ({ pokemons }: ListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-6 gap-1 justify-items-center">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.data.id}
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
    </div>
  );
};
