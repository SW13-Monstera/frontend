import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { useToggle } from '../../../../hooks/useToggle';
import { ProblemSetDetailButtonList } from '../../../../Organism/ButtonList/ProblemSet';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { ShortAnswerInput } from '../../../../Organism/ShortAnswerInput';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';
import { contentTitleStyle } from '../../../QuestionDetailPage/Short/style.css';
import { inputStyle } from './style.css';

export const ShortProblemSetDetail = ({ problemId, moveNext, pushResult }: IProblemSetDetail) => {
  const { data, refetch } = useQuery<IShortProblemDetailResponseData>(
    ['shortProblemDetail', problemId],
    () => problemApiWrapper.shortProblemDetail(problemId),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IShortProblemResultData | null>(null);
  const {
    state: isAnswerShown,
    setTrue: setIsAnswerShown,
    setFalse: setIsAnswerHidden,
  } = useToggle();

  const resetResult = () => {
    setResult(null);
    setIsAnswerHidden();
  };

  function handleSubmit() {
    if (!problemId) return;
    const answer = (document.getElementById('answer') as HTMLInputElement).value.trim();

    problemApiWrapper.shortProblemResult(problemId, answer).then((data) => {
      setResult(data);
      pushResult(problemId, { userAnswer: data?.userAnswer, score: data?.score });
      refetch();
    });
  }
  useEffect(() => {
    resetResult();
  }, [problemId]);

  return (
    <>
      <CustomSplit
        sizes={[70, 30]}
        leftSideContent={
          <>
            <ProblemTitle
              id={problemId}
              title={data?.title ?? ''}
              tags={data?.tags ?? []}
              totalSubmission={data?.totalSubmission}
              correctSubmission={data?.correctSubmission}
              correctUserCnt={data?.correctUserCnt}
              isSolved={data?.isSolved ?? false}
              size={'small'}
            />
            <div>{data?.description}</div>
          </>
        }
        rightSideContent={
          <div className={inputStyle}>
            <label htmlFor='answer' className={contentTitleStyle}>
              답안 작성
            </label>
            <ShortAnswerInput
              result={result}
              isEnglish={data?.isEnglish ?? false}
              resetResult={resetResult}
              handleSubmit={handleSubmit}
              isAnswerShown={isAnswerShown}
              setIsAnswerShown={setIsAnswerShown}
            />
          </div>
        }
      />
      <ProblemSetDetailButtonList
        handleSubmit={handleSubmit}
        isSubmittable={true}
        isResult={result !== null && result !== undefined}
        resetResult={resetResult}
        moveNext={moveNext}
      />
    </>
  );
};
