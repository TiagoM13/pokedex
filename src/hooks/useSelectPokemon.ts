import React, { useCallback, useEffect, useState } from 'react';

import { detailsPokemon } from '../interfaces/detailsPokemon';
import { api } from '../lib/axios';

export const useSelectPokemon = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [itemDetails, setItemDetails] = useState<detailsPokemon | null>(null);

  useEffect(() => {
    if (selectedItemId) {
      api
        .get(`/${selectedItemId}`)
        .then((response) => setItemDetails(response.data));
    }
  }, [selectedItemId]);

  const handleItemClick = useCallback((itemId: number) => {
    setSelectedItemId(itemId);
  }, []);

  const handleClick = useCallback(
    (itemId: number) => {
      handleItemClick(itemId);
    },
    [handleItemClick]
  );

  return {
    itemDetails,
    handleClick,
    selectedItemId,
  };
};
