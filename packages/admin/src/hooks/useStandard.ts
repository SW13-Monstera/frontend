import { ChangeEvent, MouseEvent, useState } from 'react';
import { STANDARD_TYPE } from '../constants/standard';
import { IStandardResponse } from '../types/problem/api';

type Keys = keyof typeof STANDARD_TYPE;
type Types = typeof STANDARD_TYPE[Keys];

export const useStandard = (type: Types, initialState: IStandardResponse[] = []) => {
  const [standardState, setStandardState] = useState<IStandardResponse[]>(initialState);
  const [standardId, setStandardId] = useState(0);

  function addStandardId() {
    setStandardId((prev) => prev + 1);
  }

  function addStandard() {
    setStandardState((prev) => [...prev, { content: '', score: 0, id: standardId, type: type }]);
    addStandardId();
  }

  function deleteStandard(event: MouseEvent) {
    const targetId = event.currentTarget.id;
    setStandardState((prev) => prev.filter((e) => e.id.toString() !== targetId));
  }

  const handleStandardChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.type === 'text') {
      setStandardState((prev) =>
        prev.map((standard) =>
          standard.id.toString() === target.id.replace('text-', '')
            ? { id: standard.id, score: standard.score, content: target.value, type: standard.type }
            : standard,
        ),
      );
    } else if (target.type === 'number') {
      setStandardState((prev) =>
        prev.map((standard) =>
          standard.id.toString() === target.id.replace('number-', '')
            ? {
                id: standard.id,
                score: parseFloat(target.value) || 0,
                content: standard.content,
                type: standard.type,
              }
            : standard,
        ),
      );
    } else {
      return;
    }
  };

  return { standardState, setStandardState, addStandard, deleteStandard, handleStandardChange };
};
