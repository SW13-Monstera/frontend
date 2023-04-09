import { useState, MouseEvent, useEffect, ChangeEvent } from 'react';
import { IChoiceElement } from '../types/problem/multipleApi';

interface IChoiceElementWithId extends IChoiceElement {
  id: number;
}

export const useChoice = () => {
  const initialChoice: IChoiceElement = { isAnswer: false, content: '' };
  const [choiceState, setChoiceState] = useState<IChoiceElementWithId[]>([]);
  const [choiceId, setChoiceId] = useState(0);

  function addChoiceId() {
    setChoiceId((prev) => prev + 1);
  }

  function addChoice() {
    setChoiceState((prev) => [...prev, { ...initialChoice, id: choiceId }]);
    addChoiceId();
  }
  function deleteChoice(event: MouseEvent) {
    const targetId = event.currentTarget.id;
    setChoiceState((prev) => prev.filter((e) => e.id.toString() !== targetId));
  }

  function handleChoiceChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    if (target.type === 'checkbox') {
      setChoiceState((prev) =>
        prev.map((choice) =>
          choice.id.toString() === target.id.replace('checkbox-', '')
            ? { id: choice.id, isAnswer: target.checked, content: choice.content }
            : choice,
        ),
      );
    } else if (target.type === 'text') {
      setChoiceState((prev) =>
        prev.map((choice) =>
          choice.id.toString() === target.id.replace('textfield-', '')
            ? { id: choice.id, isAnswer: choice.isAnswer, content: target.value }
            : choice,
        ),
      );
    } else {
      return;
    }
  }

  return {
    choiceState,
    setChoiceState,
    choiceId,
    addChoiceId,
    handleChoiceChange,
    addChoice,
    deleteChoice,
  };
};
