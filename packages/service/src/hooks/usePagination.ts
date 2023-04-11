import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePagination = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(
    parseInt(new URLSearchParams(location.search).get('page') ?? '1') - 1,
  );

  const setNewPage = (newPage: number) => {
    navigate(location.pathname + `?page=${newPage + 1}`);
    setPage(newPage);
  };

  return { page, setNewPage };
};
