import React, { useCallback, useEffect, useState } from 'react';

import { IDetailsPokemon } from '@interfaces/detailsPokemon';
import { api } from '@lib/axios';

export const useSelectPokemon = () => {
  const [active, setActive] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [itemDetails, setItemDetails] = useState<IDetailsPokemon | null>(null);

  useEffect(() => {
    if (selectedItemId) {
      api
        .get(`/${selectedItemId}`)
        .then((response) => setItemDetails(response.data));
    }
  }, [selectedItemId]);

  const handleOnToggleModal = useCallback(() => {
    setActive(!active);
  }, [active]);

  const handleSelectedPokemon = useCallback((itemId: number) => {
    setSelectedItemId(itemId);
  }, []);

  const handleSelected = useCallback(
    (itemId: number) => {
      handleSelectedPokemon(itemId);
      handleOnToggleModal();
    },
    [handleSelectedPokemon, handleOnToggleModal]
  );

  return {
    active,
    itemDetails,
    selectedItemId,
    handleSelected,
    handleOnToggleModal,
  };
};
