export interface IPagination<T> {
  data: T[];
  itemsPerPage: number;
}

export interface IPaginationReturn<T> {
  currentItems: T[];
  totalPages: number;
  showMoreItems: () => void;
}
