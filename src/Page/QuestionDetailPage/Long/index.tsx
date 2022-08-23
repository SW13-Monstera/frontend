import { contentTitleStyle, answerInputContentStyle } from './style.css';
import '../gutter.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URLWithParam } from '../../../constants/url';
import { ILongProblemDetailResponseData, ILongProblemResultData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<ILongProblemResultData | null>(null);

  function handleSubmit() {
    if (!id) return;
    const answer = (document.getElementById('answer') as HTMLTextAreaElement).value;
    problemApiWrapper.longProblemResult(id, answer).then((data) => {
      setResult(data);
    });
  }

  useEffect(() => {
    if (!id || !result) return;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(id)), { state: result });
  }, [result]);

  return (
    <SplitProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <label htmlFor='answer' className={contentTitleStyle}>
        답안 작성
      </label>
      <textarea
        id='answer'
        placeholder='답변을 입력해주세요'
        className={answerInputContentStyle}
      ></textarea>
    </SplitProblemDetailPageTemplate>
  );
}
