import { contentTitleStyle, answerInputContentStyle } from './style.css';
import '../gutter.css';
import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );

  return (
    <SplitProblemDetailPageTemplate data={data}>
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
