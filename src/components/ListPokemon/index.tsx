/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import { POKEMONS } from '../../database/data';
import { Pokemons } from '../../interfaces/pokemons';
import { getPokemonSkills, getTypesPokemons } from '../../utils/pokemonsData';
import { PokemonCard, PokemonData } from '../PokemonCard';

interface Props {
  data: PokemonData[];
}

export const ListPokemon = ({ data }: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-6 gap-1 justify-items-center">
        {data.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.order}
              order={pokemon.order}
              name={pokemon.name}
              skills={{
                skill_1: pokemon.skills.skill_1,
                skill_2: pokemon.skills.skill_2,
              }}
              types={{
                type_1: pokemon.types.type_1,
                type_2: pokemon.types.type_2,
              }}
              url_img={pokemon.url_img}
            />
          );
        })}
      </ul>
    </div>
  );
};
