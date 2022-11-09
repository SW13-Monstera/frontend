import { useNavigate, useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';
import { URLWithParam } from '../../../constants/url';
import { MetaTag } from '../../utils/MetaTag';
import { ProblemDescriptionBox } from '../../../Component/Box/ProblemDescriptionBox';
import { ILongProblemResultLocationState } from '../../../types/problem';
import { useState, KeyboardEvent } from 'react';
import { LONG_PROBLEM_ANSWER } from '../../../constants/localStorage';
import { localStorageWithExpiry } from '../../../utils/localstorage';
import { INVALID_ID_ERROR } from '../../../errors';
import { LongProblemTextArea } from '../../../Component/TextArea/LongProblemTextArea';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) throw INVALID_ID_ERROR;
  const [userAnswer, setUserAnswer] = useState(
    localStorageWithExpiry.getItem(LONG_PROBLEM_ANSWER(id!)) ?? '',
  );
  const { data, refetch } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id),
    { refetchOnWindowFocus: false },
  );

  const handleSubmit = () => {
    if (!id) throw INVALID_ID_ERROR;
    localStorage.removeItem(LONG_PROBLEM_ANSWER(id));
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(id)), {
      state: { userAnswer: userAnswer, title: data?.title } as ILongProblemResultLocationState,
    });
    refetch();
  };

  const onTextAreaChange = (event: KeyboardEvent) => {
    const userAnswerValue = (event.target as HTMLTextAreaElement).value;
    setUserAnswer(userAnswerValue);
    if (!id) return;
    localStorageWithExpiry.setItem(LONG_PROBLEM_ANSWER(id), userAnswerValue);
  };

  return (
    <>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 서술형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 서술형`}
      />
      <>
        <SplitProblemDetailPageTemplate
          data={data}
          handleSubmit={handleSubmit}
          isSubmittable={userAnswer?.length >= 10}
          leftSideContent={<ProblemDescriptionBox>{data?.description}</ProblemDescriptionBox>}
          rightSideContent={
            <LongProblemTextArea userAnswer={userAnswer} onTextAreaChange={onTextAreaChange} />
          }
        />
      </>
    </>
  );
}
