/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { POKEMONS } from '../../database/data';
import { useGetPokemonsData } from '../../hooks/usePokemons';
import { getPokemonSkills, getTypesPokemons } from '../../utils/pokemonsData';
import { PokemonCard } from '../PokemonCard';

export const ListPokemon: React.FC = () => {
  // const { pokemons } = useGetPokemonsData();

  return (
    <div>
      <ul className="grid grid-cols-6 gap-1 justify-items-center">
        {POKEMONS.map((pokemon) => {
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
