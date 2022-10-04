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

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [charCount, setCharCount] = useState(0);
  const { data, refetch } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );

  const handleSubmit = () => {
    if (!id) throw new Error('invalid id');
    const answer = (document.getElementById('answer') as HTMLTextAreaElement).value;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(id)), {
      state: { userAnswer: answer, title: data?.title } as ILongProblemResultLocationState,
    });
    refetch();
  };

  const onTextAreaChange = (event: KeyboardEvent) => {
    const element = event.target as HTMLTextAreaElement;
    setCharCount(element.value.length ?? 0);
    if (!id) return;
    localStorage.setItem(LONG_PROBLEM_ANSWER(id), element.value);
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
        isSubmittable={charCount >= 10}
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
            ></textarea>
            <div className={charCntWrapperStyle}>
              <div>{charCount}/300</div>
              <div className={`${charCntWarningStyle} ${charCount >= 10 ? hiddenStyle : ''}`}>
                답변을 10자 이상 작성해주세요.
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
