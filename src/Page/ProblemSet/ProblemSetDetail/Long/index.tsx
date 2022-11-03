import { KeyboardEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { SkeletonProblemSetLongProblemResultPage } from '../../../../Component/Skeleton/SkeletonProblemSetLongProblemResultPage';
import { LongProblemTextArea } from '../../../../Component/TextArea/LongProblemTextArea';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { INVALID_ID_ERROR } from '../../../../errors';
import { ProblemSetDetailButtonList } from '../../../../Organism/ButtonList/ProblemSet';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import {
  ILongProblemDetailResponseData,
  ILongProblemResultData,
} from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';
import { LongProblemSetResult } from '../LongResult';

export const LongProblemSetDetail = ({
  problemId,
  moveNext,
  resultList,
  pushResult,
}: IProblemSetDetail) => {
  const { data } = useQuery<ILongProblemDetailResponseData>(
    ['longProblemDetail', problemId],
    () => problemApiWrapper.longProblemDetail(problemId),
    { refetchOnWindowFocus: false },
  );
  const [userAnswer, setUserAnswer] = useState('');
  const {
    data: result,
    isLoading,
    mutate,
  } = useMutation<ILongProblemResultData>(() =>
    problemApiWrapper.longProblemResult(problemId, userAnswer).then((data) => {
      pushResult(problemId, { userAnswer: data?.userAnswer, score: data?.score });
      return data;
    }),
  );

  function handleSubmit() {
    if (!problemId) throw INVALID_ID_ERROR;
    mutate();
  }
  const onTextAreaChange = (event: KeyboardEvent) => {
    const userAnswerValue = (event.target as HTMLTextAreaElement).value;
    setUserAnswer(userAnswerValue);
  };

  if (isLoading) return <SkeletonProblemSetLongProblemResultPage />;

  return !result ? (
    <>
      <CustomSplit
        leftSideContent={
          <>
            <ProblemTitle
              id={problemId}
              title={data?.title ?? ''}
              tags={data?.tags ?? []}
              totalSubmission={data?.totalSubmission}
              avgScore={data?.avgScore}
              topScore={data?.topScore}
              bottomScore={data?.bottomScore}
              isSolved={data?.isSolved ?? false}
              size={'small'}
            />
            <div>{data?.description}</div>
          </>
        }
        rightSideContent={
          <LongProblemTextArea userAnswer={userAnswer} onTextAreaChange={onTextAreaChange} />
        }
      />
      <ProblemSetDetailButtonList
        handleSubmit={handleSubmit}
        isSubmittable={userAnswer?.length >= 10}
        moveNext={moveNext}
      />
    </>
  ) : (
    <LongProblemSetResult result={result} resultList={resultList} />
  );
};
