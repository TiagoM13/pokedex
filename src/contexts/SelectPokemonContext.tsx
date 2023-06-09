import React, { ReactNode, createContext } from 'react';

import { useSelectPokemon } from '@hooks';
import { IDetailsPokemon } from '@interfaces';

type SelectPokemonContextData = {
  active: boolean;
  itemDetails: IDetailsPokemon | null;
  selectedItemId: number | null;
  handleSelectPokemon: (pokemonId: number) => void;
  toggleModal: () => void;
};

type SelectedPokemonProviderProps = {
  children: ReactNode;
};

const selectedPokemonContext = createContext<
  SelectPokemonContextData | undefined
>(undefined);

const SelectedPokemonProvider: React.FC<SelectedPokemonProviderProps> = ({
  children,
}) => {
  const {
    active,
    itemDetails,
    handleSelected,
    selectedItemId,
    handleOnToggleModal,
  } = useSelectPokemon();

  const toggleModal = () => handleOnToggleModal();

  const handleSelectPokemon = (pokemonId: number) => {
    handleSelected(pokemonId);
  };

  return (
    <selectedPokemonContext.Provider
      value={{
        active,
        toggleModal,
        itemDetails,
        selectedItemId,
        handleSelectPokemon,
      }}
    >
      {children}
    </selectedPokemonContext.Provider>
  );
};

export { selectedPokemonContext, SelectedPokemonProvider };
