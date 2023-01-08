import { useEffect, useState } from 'react';

import axios from 'axios';

import { Pokemons } from '../interfaces/pokemons';

export const useGetPokemonsData = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const endpoints = [];

      for (let i = 1; i <= 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((response) => setPokemons(response));
    };

    getPokemons();
  }, []);

  return { pokemons };
};
