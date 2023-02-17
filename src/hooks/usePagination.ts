import { useEffect, useState } from 'react';

import { IPagination, IPaginationReturn } from '../interfaces/pagination';

export const usePagination = <T>({
  data,
  itemsPerPage,
}: IPagination<T>): IPaginationReturn<T> => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentItemsCount, setCurrentItemsCount] = useState(itemsPerPage);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / currentItemsCount));
  }, [data, currentItemsCount]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / currentItemsCount));
  }, [data, currentItemsCount]);

  const currentItems = data.slice(0, currentItemsCount);

  function showMoreItems() {
    setCurrentItemsCount((count) => count + itemsPerPage);
  }

  return {
    currentItems,
    totalPages,
    showMoreItems,
  };
};
