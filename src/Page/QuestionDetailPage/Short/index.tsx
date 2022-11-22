import {
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  inputWrapperStyle,
} from './style.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IShortProblemDetailResponseDataV2,
  IShortProblemResultData,
} from '../../../types/api/problem';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';
import { useQuery } from 'react-query';
import { MarkdownBox } from '../../../Component/Box/MarkdownBox';
import { MetaTag } from '../../utils/MetaTag';
import { useToggle } from '../../../hooks/useToggle';
import { ShortAnswerInput } from '../../../Organism/ShortAnswerInput';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { data, refetch } = useQuery<IShortProblemDetailResponseDataV2>(
    'shortProblemDetail',
    () => problemApiWrapper.shortProblemDetailV2(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IShortProblemResultData | null>(null);

  const {
    state: isAnswerShown,
    setTrue: setIsAnswerShown,
    setFalse: setIsAnswerHidden,
  } = useToggle();

  const resetResult = () => {
    setResult(null);
    setIsAnswerHidden();
  };

  function handleSubmit() {
    if (!id) return;
    const answer = (document.getElementById('answer') as HTMLInputElement).value.trim();
    problemApiWrapper.shortProblemResult(id, answer).then((data) => {
      setResult(data);
      refetch();
    });
  }

  return (
    <>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 단답형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 단답형`}
      />
      <>
        <ProblemDetailPageTemplate
          data={data}
          handleSubmit={handleSubmit}
          isResult={result !== null && result !== undefined}
          resetResult={resetResult}
          isSubmittable={true}
        >
          <div className={contentWrapperStyle}>
            <div className={contentTitleStyle}>문제 설명</div>
            <div className={problemDescContentStyle}>
              <MarkdownBox>{data?.description}</MarkdownBox>
            </div>
          </div>
          <div className={inputWrapperStyle}>
            <ShortAnswerInput
              result={result}
              consistOf={data?.consistOf ?? 'ENGLISH'}
              resetResult={resetResult}
              handleSubmit={handleSubmit}
              isAnswerShown={isAnswerShown}
              setIsAnswerShown={setIsAnswerShown}
            />
          </div>
        </ProblemDetailPageTemplate>
      </>
    </>
  );
}
