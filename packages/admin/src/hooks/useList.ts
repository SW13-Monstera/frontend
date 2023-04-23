import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const useList = (minCount?: number, maxCount?: number) => {
  const [ids, setIds] = useState<string[]>(Array(minCount).fill(uuid()));

  const addItem = () => {
    if (maxCount && ids.length >= maxCount) {
      alert(`최대 ${maxCount}개 입력 가능합니다.`);
      return;
    }
    setIds((prev) => [...prev, uuid()]);
  };

  const deleteItem = (id: string) => {
    if (minCount && ids.length <= minCount) {
      alert(`최소 ${minCount}개 입력해야 합니다.`);
      return;
    }
    setIds((prev) => prev.filter((eId) => eId !== id));
  };

  return { ids, addItem, deleteItem };
};
