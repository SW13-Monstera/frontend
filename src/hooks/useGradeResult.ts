import { IMultipleProblemResultData, IShortProblemResultData } from './../types/api/problem';
import { useEffect, useState } from 'react';

type TResult = IShortProblemResultData | IMultipleProblemResultData;

export const useGradeResult = (result: TResult | null, resetInput: () => void) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [isGraded, setIsGraded] = useState(false);

  useEffect(() => {
    if (!result) return;
    setIsAnswer(result.isAnswer);
    setIsGraded(true);
  }, [result]);

  return { isAnswer, isGraded };
};
