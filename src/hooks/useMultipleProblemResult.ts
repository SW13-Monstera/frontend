import { useState } from 'react';
import { IMultipleProblemResultData } from '../types/api/problem';

export const useMultipleProblemResult = () => {
  const [result, setResult] = useState<IMultipleProblemResultData | null>(null);

  const resetInput = () => {
    (document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>).forEach(
      (e) => (e.checked = false),
    );
  };

  const resetResult = () => {
    if (!result) return;
    resetInput();
    setResult(null);
  };

  return { result, setResult, resetResult };
};
