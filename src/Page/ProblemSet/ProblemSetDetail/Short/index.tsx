import { useState } from 'react';
import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { useToggle } from '../../../../hooks/useToggle';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { ShortAnswerInput } from '../../../../Organism/ShortAnswerInput';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';
import { contentTitleStyle } from '../../../QuestionDetailPage/Short/style.css';
import { inputStyle } from './style.css';

export const ShortProblemSetDetail = ({ problemId }: IProblemSetDetail) => {
  const { data, refetch } = useQuery<IShortProblemDetailResponseData>(
    ['shortProblemDetail', problemId],
    () => problemApiWrapper.shortProblemDetail(problemId.toString()),
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
    if (!problemId.toString()) return;
    const answer = (document.getElementById('answer') as HTMLInputElement).value.trim();
    problemApiWrapper.shortProblemResult(problemId.toString(), answer).then((data) => {
      setResult(data);
      refetch();
    });
  }

  return (
    <CustomSplit
      sizes={[70, 30]}
      leftSideContent={
        <>
          <ProblemTitle
            id={problemId.toString()}
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
  );
};
