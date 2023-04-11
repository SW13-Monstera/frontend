import { useEffect, useState } from 'react';
import { PROBLEM_FILTER } from '../constants/filter';
import { IFilter } from '../types/etc';

export const useTableParams = <T>(page: number, filterState: IFilter[]) => {
  const [params, setParams] = useState<T>();

  function getParams() {
    const params = Object.fromEntries(
      new Map(
        filterState.map((filter) => [
          PROBLEM_FILTER.find((e) => filter.condition === e.value && filter.value)?.value,
          filter.value,
        ]),
      ),
    );
    return params;
  }

  useEffect(() => {
    setParams({ ...getParams(), page: page });
  }, [page]);

  useEffect(() => {
    if (filterState.length > 0 && filterState.some((e) => e.value))
      setParams((prev) => {
        return { ...prev, ...getParams() };
      });
  }, [filterState]);

  return { params };
};
