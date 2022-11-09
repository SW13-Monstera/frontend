import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { useMultipleProblemResult } from '../../../../hooks/useMultipleProblemResult';
import { MultipleChoiceList } from '../../../../Organism/ButtonList/MultipleChoiceList';
import { ProblemSetDetailButtonList } from '../../../../Organism/ButtonList/ProblemSet';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { IMultipleProblemDetailResponseData } from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';

export const MultipleProblemSetDetail = ({
  problemId,
  moveNext,
  pushResult,
}: IProblemSetDetail) => {
  const { data } = useQuery<IMultipleProblemDetailResponseData>(
    ['multipleProblemDetail', problemId],
    () => problemApiWrapper.multipleProblemDetail(problemId),
    { refetchOnWindowFocus: false },
  );
  const { result, setResult, resetResult } = useMultipleProblemResult();
  const handleSubmit = () => {
    if (!problemId) return;
    const answerIds: number[] = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((e) => (e.checked ? answerIds.push(parseInt(e.id)) : ''));
    problemApiWrapper.multipleProblemResult(problemId, answerIds).then((data) => {
      setResult(data);
      pushResult(problemId, { userAnswer: data?.userAnswerIds, score: data?.score });
    });
  };

  useEffect(() => {
    resetResult();
  }, [problemId]);

  return (
    <>
      <CustomSplit
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
          <MultipleChoiceList
            choices={data?.choices}
            result={result}
            resetResult={resetResult}
            isMultipleAnswer={data?.isMultipleAnswer ?? false}
          />
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
