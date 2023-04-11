import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { IFilter, IProblemCondition } from '../types/etc';

export const useFilter = () => {
  let timer: NodeJS.Timeout | null = null;

  const [filterState, setFilterState] = useState<IFilter[]>([]);
  const [filterValueState, setFilterValueState] = useState<string>('');
  const [filterId, setFilterId] = useState(0);

  function addFilterId() {
    setFilterId((prev) => prev + 1);
  }

  function addFilter() {
    setFilterState((prev) => [...prev, { id: filterId, condition: 'id', value: '' }]);
    addFilterId();
  }

  function deleteFilter(event: MouseEvent<Element, MouseEvent>) {
    const id = event.currentTarget.id;
    setFilterState((prev) => prev.filter((e) => e.id.toString() !== id));
  }

  function updateCondition(newCondition: IProblemCondition, DOMId: string) {
    setFilterState((prev) =>
      prev.map(({ id, condition, value }) =>
        id.toString() === DOMId
          ? ({ id, value, condition: newCondition } as unknown as IFilter)
          : { id, condition, value },
      ),
    );
  }

  function updateFilterValue(event: ChangeEvent<HTMLTextAreaElement>) {
    if (!event.currentTarget) return;
    if (event && timer) clearTimeout(timer);

    const DOMValue = event.currentTarget.value;

    timer = setTimeout(() => {
      setFilterValueState(DOMValue);
    }, 500);
  }

  useEffect(() => {
    setFilterState((prev) =>
      prev.map(({ id, condition }) => {
        return { id, value: filterValueState, condition };
      }),
    );
  }, [filterValueState]);

  return { filterState, addFilter, deleteFilter, updateCondition, updateFilterValue };
};
