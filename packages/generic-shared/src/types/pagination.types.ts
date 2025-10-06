export type TPaginationResponse<T> = {
  page: number; // Current page number
  pageSize: number; // Page size
  totalPageCount: number; // Total number of pages
  pageItemsCount: number; // Number of items on the current page
  totalItemsCount: number; // Total number of items across all pages
  items: Array<T>; // The actual paginated data
};

export type TPaginationOptions = {
  page?: number;
  limit?: number;
};

export type TGroupedByDateItem<T> = { date: string; items: Array<T> };
