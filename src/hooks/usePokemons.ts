/* eslint-disable guard-for-in */
import { useEffect, useState, useCallback } from 'react';

import { IPokemons } from '@interfaces';
import axios from 'axios';

export const useGetPokemonsData = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  useEffect(() => {
    setLoading(true);
    getPokemons().finally(() => setLoading(false));
  }, []);

  const getPokemons = async () => {
    const endpoints = [];
    const count = 1000; // total são 1281 pokemons

    for (let i = 1; i <= count; i++) {
      endpoints.push(`${process.env.VITE_URL_API}/${i}`);
    }

    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => setPokemons(response));
  };

  const handleFilterPokemon = (query: string) => {
    const filteredPokemons: IPokemons[] = [];

    if (query === '') {
      getPokemons();
      return;
    }

    const searchQuery = query.toLowerCase();
    const isNumericQuery = /^[0-9]+$/.test(searchQuery);

    for (const i in pokemons) {
      const pokemon = pokemons[i].data;
      if (
        pokemon.name.toLowerCase().includes(searchQuery) ||
        (isNumericQuery && pokemon.id.toString().includes(searchQuery))
      ) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return { pokemons, loading, handleFilterPokemon, getPokemons };
};
