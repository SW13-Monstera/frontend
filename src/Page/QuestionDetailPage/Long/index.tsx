import { useNavigate, useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';
import { URLWithParam } from '../../../constants/url';
import { MetaTag } from '../../utils/MetaTag';
import { ProblemDescriptionBox } from '../../../Component/Box/ProblemDescriptionBox';
import {
  answerInputContentStyle,
  charCntWarningStyle,
  charCntWrapperStyle,
  contentTitleStyle,
  hiddenStyle,
} from './style.css';
import { ILongProblemResultLocationState } from '../../../types/problem';
import { useState, KeyboardEvent } from 'react';
import { LONG_PROBLEM_ANSWER } from '../../../constants/localStorage';
import { localStorageWithExpiry } from '../../../utils/localstorage';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState(
    localStorageWithExpiry.getItem(LONG_PROBLEM_ANSWER(id!)) ?? '',
  );
  const { data, refetch } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );

  const handleSubmit = () => {
    if (!id) throw new Error('invalid id');
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(id)), {
      state: { userAnswer: userAnswer, title: data?.title } as ILongProblemResultLocationState,
    });
    refetch();
    localStorage.removeItem(LONG_PROBLEM_ANSWER(id));
  };

  const onTextAreaChange = (event: KeyboardEvent) => {
    const userAnswerValue = (event.target as HTMLTextAreaElement).value;
    setUserAnswer(userAnswerValue);
    if (!id) return;
    setTimeout(() => {
      localStorageWithExpiry.setItem(LONG_PROBLEM_ANSWER(id), userAnswerValue);
    }, 1500);
  };

  return (
    <>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 서술형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 서술형`}
      />
      <SplitProblemDetailPageTemplate
        data={data}
        handleSubmit={handleSubmit}
        isSubmittable={userAnswer?.length >= 10}
        leftSideContent={<ProblemDescriptionBox>{data?.description}</ProblemDescriptionBox>}
        rightSideContent={
          <>
            <label htmlFor='answer' className={contentTitleStyle}>
              답안 작성
            </label>
            <textarea
              id='answer'
              placeholder='답변을 입력해주세요'
              className={answerInputContentStyle}
              minLength={10}
              maxLength={300}
              onKeyUp={onTextAreaChange}
              defaultValue={userAnswer ?? undefined}
            ></textarea>
            <div className={charCntWrapperStyle}>
              <div>{userAnswer?.length}/300</div>
              <div
                className={`${charCntWarningStyle} ${userAnswer?.length >= 10 ? hiddenStyle : ''}`}
              >
                답변을 10자 이상 작성해주세요.
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
