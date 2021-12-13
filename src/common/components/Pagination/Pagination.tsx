import * as React from 'react';
import { HiOutlineChevronDoubleRight, HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { usePagination } from '@/common/hooks/usePagination';

import * as S from './styled';

export interface PaginationProps {
  currentPage: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
}

export const Pagination = (props: PaginationProps) => {
  const {
    goToPreviousPage,
    canPreviousPage,
    currentPage,
    goToNextPage,
    canNextPage,
    changePage,
    pages,
    totalPages,
  } = usePagination(props);

  return (
    <S.PaginationRoot>
      <S.PaginationWrapper>
        <S.ChangePage
          type="button"
          onClick={() => changePage(1)}
          disabled={!canPreviousPage}
        >
          <HiOutlineChevronDoubleLeft />
        </S.ChangePage>

        <S.ChangePage
          type="button"
          onClick={goToPreviousPage}
          disabled={!canPreviousPage}
        >
          <RiArrowLeftSLine />
        </S.ChangePage>

        {pages.map((index) => (
          <S.Page
            key={index}
            type="button"
            onClick={() => changePage(index)}
            disabled={currentPage === index}
          >
            {index}
          </S.Page>
        ))}
        <S.ChangePage
          type="button"
          onClick={goToNextPage}
          disabled={!canNextPage}
        >
          <RiArrowRightSLine />
        </S.ChangePage>

        <S.ChangePage
          type="button"
          onClick={() => changePage(totalPages)}
          disabled={!canNextPage}
        >
          <HiOutlineChevronDoubleRight />
        </S.ChangePage>
      </S.PaginationWrapper>
    </S.PaginationRoot>
  );
};
