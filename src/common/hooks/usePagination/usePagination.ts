import * as React from 'react';

const lowerBound = (value: number, limit: number) => {
  return value >= limit ? value : limit;
};

export interface UsePaginationOptions {
  currentPage: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  pageRange?: number;
  itemsPerPage: number;
}

export const usePagination = (options: UsePaginationOptions) => {
  const {
    currentPage,
    onChange,
    totalItems,
    itemsPerPage,
    pageRange = 5,
  } = options;

  const totalPages = Math.ceil((totalItems || 0) / itemsPerPage);

  const startPage = () => {
    if (currentPage - pageRange / 2 <= 0) {
      return 1;
    }
    if (currentPage + pageRange / 2 > totalPages) {
      return lowerBound(totalPages - pageRange + 1, 1);
    }

    return Math.ceil(currentPage - pageRange / 2);
  };

  const getPages = () => {
    const pages: number[] = [];

    for (let i = 0; (i < pageRange) && (i < totalPages); i += 1) {
      pages.push(startPage() + i);
    }

    return pages;
  };

  return {
    pages: getPages(),
    totalPages,
    goToNextPage: () => onChange((prevPage) => prevPage + 1),
    goToPreviousPage: () => onChange((prevPage) => prevPage - 1),
    changePage: (index: number) => onChange(index),
    currentPage,
    canNextPage: currentPage < totalPages,
    canPreviousPage: currentPage > 1,
  };
};
