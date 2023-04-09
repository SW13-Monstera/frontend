import { useEffect, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROBLEM_FILTER } from '../constants/filter';
import { IFilter } from '../types/etc';
import { IProblemListRequest } from '../types/problem/api';

export const useTable = (url?: (id: string) => string) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  function handleRowClick(id: string) {
    if (url) {
      navigate(url(id));
    }
  }

  return {
    page,
    handleChangePage,
    handleRowClick,
  };
};
