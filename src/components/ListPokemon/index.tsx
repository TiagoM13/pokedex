/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Pokemons } from '../../interfaces/pokemons';
import { getPokemonSkills, getTypesPokemons } from '../../utils/pokemonsData';

export const ListPokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => setPokemons(response));
  };

  useEffect(() => {
    getPokemons();
  }, []);

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
