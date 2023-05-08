import { useEffect, useState } from 'react';

import { IPagination, IPaginationReturn } from '@interfaces/index';

export const usePagination = <T>({
  data,
  itemsPerPage,
}: IPagination<T>): IPaginationReturn<T> => {
  const [loadItems, setLoadItems] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItemsCount, setCurrentItemsCount] = useState(itemsPerPage);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / currentItemsCount));
  }, [data, currentItemsCount]);

  const currentItems = data.slice(0, currentItemsCount);

  const showMoreItems = () => {
    setLoadItems(true);
    setTimeout(() => {
      setCurrentItemsCount((count) => count + itemsPerPage);
      setLoadItems(false);
    }, 1000);
  };

  return {
    currentItems,
    totalPages,
    showMoreItems,
    loadItems,
  };
};
