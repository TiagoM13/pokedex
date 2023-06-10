import React, { createContext, ReactNode } from 'react';

import { useGetPokemonsData } from '@hooks';
import { IPokemons } from '@interfaces';

interface PokemonContextData {
  pokemons: IPokemons[];
  loading: boolean;
  filterPokemon: (name: string) => void;
}

interface PokemonProviderProps {
  children: ReactNode;
}

const PokemonContext = createContext<PokemonContextData | undefined>(undefined);

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const { pokemons, loading, handleFilterPokemon } = useGetPokemonsData();

  const filterPokemon = (name: string) => {
    handleFilterPokemon(name);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        filterPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
