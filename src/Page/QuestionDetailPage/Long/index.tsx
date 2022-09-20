import { contentTitleStyle, answerInputContentStyle } from './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../types/api/problem';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';
import { URLWithParam } from '../../../constants/url';
import { MetaTag } from '../../utils/MetaTag';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery<ILongProblemDetailResponseData>(
    'longProblemDetail',
    () => problemApiWrapper.longProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );

  const handleSubmit = () => {
    if (!id) throw new Error('invalid id');
    const answer = (document.getElementById('answer') as HTMLTextAreaElement).value;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(parseInt(id)), { state: answer });
  };

  return (
    <SplitProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 서술형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 서술형`}
      />
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
