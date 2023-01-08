/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import axios from 'axios';

import { useGetPokemonsData } from '../../hooks/usePokemons';
import { getPokemonSkills, getTypesPokemons } from '../../utils/pokemonsData';

export const ListPokemon: React.FC = () => {
  const { pokemons } = useGetPokemonsData();

  // console.log(pokemons);
  return (
    <div>
      <ul>
        {pokemons.map((pokemon, key) => {
          return (
            <li key={key}>
              <span>{pokemon.data.name}</span>
              <p># {pokemon.data.order}</p>
              <p>{getTypesPokemons(pokemon.data.types)}</p>
              <img
                src={pokemon.data.sprites.front_default}
                alt={`Pokémon - ${pokemon.data.name}`}
                loading="lazy"
              />
              <p>{getPokemonSkills(pokemon.data.abilities)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
