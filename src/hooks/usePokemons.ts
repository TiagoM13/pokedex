/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';

import axios from 'axios';

import { Pokemons } from '../interfaces/pokemons';

export const useGetPokemonsData = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const endpoints = [];

    for (let i = 1; i <= 151; i++) {
      endpoints.push(`${import.meta.env.VITE_URL_API}/${i}`);
    }

    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => setPokemons(response));
  };

  const FilterPokemon = (name: string) => {
    const filteredPokemons = [];

    if (name === '') {
      getPokemons();
    }

    for (const i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    return setPokemons(filteredPokemons);
  };

  return { pokemons, FilterPokemon };
};
