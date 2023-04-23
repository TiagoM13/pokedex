/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';

import { IPokemons } from '@interfaces/pokemons';
import axios from 'axios';

export const useGetPokemonsData = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  // console.log(pokemons);

  useEffect(() => {
    setLoading(true);
    getPokemons().finally(() => setLoading(false));
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
      if (pokemons[i].data.name.includes(name.toLocaleLowerCase())) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    return setPokemons(filteredPokemons);
  };

  return { pokemons, loading, FilterPokemon };
};
