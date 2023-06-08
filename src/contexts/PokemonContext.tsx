import React, { createContext, useContext, ReactNode } from 'react';

import { useGetPokemonsData, useSelectPokemon } from '@hooks';
import { IDetailsPokemon, IPokemons } from '@interfaces';

interface PokemonContextData {
  selectedItemId: number | null;
  itemDetails: IDetailsPokemon | null;
  pokemons: IPokemons[];
  loading: boolean;
  active: boolean;
  selectPokemon: (pokemonId: number) => void;
  filterPokemon: (name: string) => void;
  handleOnToggleModal: () => void;
}

interface PokemonProviderProps {
  children: ReactNode;
}

const PokemonContext = createContext<PokemonContextData | undefined>(undefined);

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const { pokemons, loading, handleFilterPokemon } = useGetPokemonsData();
  const {
    active,
    itemDetails,
    handleSelected,
    selectedItemId,
    handleOnToggleModal,
  } = useSelectPokemon();

  const selectPokemon = (pokemonId: number) => {
    handleSelected(pokemonId);
  };

  const filterPokemon = (name: string) => {
    handleFilterPokemon(name);
  };

  return (
    <PokemonContext.Provider
      value={{
        itemDetails,
        pokemons,
        loading,
        active,
        selectedItemId,
        filterPokemon,
        selectPokemon,
        handleOnToggleModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};

export { PokemonProvider, usePokemonContext };
