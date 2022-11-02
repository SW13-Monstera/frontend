import { KeyboardEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { problemApiWrapper } from '../../../../api/wrapper/problem/problemApiWrapper';
import { LongProblemTextArea } from '../../../../Component/TextArea/LongProblemTextArea';
import { CustomSplit } from '../../../../Component/Utils/Split/CustomSplit';
import { URLWithParam } from '../../../../constants/url';
import { INVALID_ID_ERROR } from '../../../../errors';
import { ProblemSetDetailButtonList } from '../../../../Organism/ButtonList/ProblemSet';
import ProblemTitle from '../../../../Organism/ProblemTitle';
import { ILongProblemDetailResponseData } from '../../../../types/api/problem';
import { ILongProblemResultLocationState } from '../../../../types/problem';
import { IProblemSetDetail } from '../../../../types/problemSet';

export const LongProblemSetDetail = ({ problemId, moveNext }: IProblemSetDetail) => {
  const navigate = useNavigate();
  const { data } = useQuery<ILongProblemDetailResponseData>(
    ['longProblemDetail', problemId],
    () => problemApiWrapper.longProblemDetail(problemId),
    { refetchOnWindowFocus: false },
  );
  const [userAnswer, setUserAnswer] = useState('');
  const handleSubmit = () => {
    if (!problemId) throw INVALID_ID_ERROR;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(problemId)), {
      state: { userAnswer: userAnswer, title: data?.title } as ILongProblemResultLocationState,
    });
  };
  const onTextAreaChange = (event: KeyboardEvent) => {
    const userAnswerValue = (event.target as HTMLTextAreaElement).value;
    setUserAnswer(userAnswerValue);
  };
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
  );
};
