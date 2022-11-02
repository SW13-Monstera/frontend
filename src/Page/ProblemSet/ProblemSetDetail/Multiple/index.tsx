import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { useMultipleProblemResult } from '../../../../hooks/useMultipleProblemResult';
import { MultipleChoiceList } from '../../../../Organism/ButtonList/MultipleChoiceList';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { IMultipleProblemDetailResponseData } from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';

export const MultipleProblemSetDetail = ({ problemId }: IProblemSetDetail) => {
  const { data } = useQuery<IMultipleProblemDetailResponseData>(
    ['multipleProblemDetail', problemId],
    () => problemApiWrapper.multipleProblemDetail(problemId.toString()),
    { refetchOnWindowFocus: false },
  );
  const { result, resetResult } = useMultipleProblemResult();

  return (
    <>
      <CustomSplit
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
          <MultipleChoiceList choices={data?.choices} result={result} resetResult={resetResult} />
        }
      />
    </>
  );
};
