import { useContext } from 'react';

import { selectedPokemonContext } from '@contexts';

export const useSelectedPokemonContext = () => {
  const context = useContext(selectedPokemonContext);

  if (!context) {
    throw new Error(
      'usePokemonSelectedContext must be used within a selectedPokemonProvider'
    );
  }

  return context;
};
