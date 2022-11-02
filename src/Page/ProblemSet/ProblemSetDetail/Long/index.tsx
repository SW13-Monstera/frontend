import { KeyboardEvent } from 'react';
import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { LongProblemTextArea } from '../../../../Component/TextArea/LongProblemTextArea';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { ILongProblemDetailResponseData } from '../../../../types/api/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';

export const LongProblemSetDetail = ({ problemId }: IProblemSetDetail) => {
  const { data } = useQuery<ILongProblemDetailResponseData>(
    ['longProblemDetail', problemId],
    () => problemApiWrapper.longProblemDetail(problemId.toString()),
    { refetchOnWindowFocus: false },
  );
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
          <LongProblemTextArea
            userAnswer={''}
            onTextAreaChange={function (event: KeyboardEvent): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      />
    </>
  );
};
