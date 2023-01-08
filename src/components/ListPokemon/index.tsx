/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface Props {
  data: {
    name: string;
    order: string;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
    types: [];
    abilities: [];
  };
}

export const ListPokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<Props[]>([]);

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

  const typeHandler = (types: any[]) => {
    if (types[1]) {
      return `${types[0].type.name} | ${types[1].type.name}`;
    }
    return types[0].type.name;
  };

  const typeAbilities = (abilities: any[]) => {
    if (abilities[1]) {
      return `${abilities[0].ability.name} | ${abilities[1].ability.name}`;
    }
    return abilities[0].ability.name;
  };

  console.log(pokemons);
  return (
    <div>
      <ul>
        {pokemons.map((pokemon, key) => {
          return (
            <li key={key}>
              <span>{pokemon.data.name}</span>
              <p># {pokemon.data.order}</p>
              <p>{typeHandler(pokemon.data.types)}</p>
              <img
                src={pokemon.data.sprites.front_default}
                alt={`Pokémon - ${pokemon.data.name}`}
                loading="lazy"
              />
              <p>{typeAbilities(pokemon.data.abilities)}</p>
              {/* <span>{pokemon.data.abilities[0].ability.name}</span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
