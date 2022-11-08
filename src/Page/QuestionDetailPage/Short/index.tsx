import {
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  answerInputContentStyle,
  resultWrapperStyle,
  gapStyle,
  showAnswerButtonStyle,
} from './style.css';
import { useParams } from 'react-router-dom';
import { useState, KeyboardEvent } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../types/api/problem';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';
import { useQuery } from 'react-query';
import { MarkdownBox } from '../../../Component/Box/MarkdownBox';
import { MetaTag } from '../../utils/MetaTag';
import { ColumnBox } from '../../../Component/Box/CustomBox';
import { ResultBox } from '../../../Component/Box/ResultBox';
import { hiddenStyle } from '../../../styles/util.css';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { data, refetch } = useQuery<IShortProblemDetailResponseData>(
    'shortProblemDetail',
    () => problemApiWrapper.shortProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IShortProblemResultData | null>(null);
  const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);

  const resetResult = () => {
    setResult(null);
    setIsAnswerShown(false);
  };

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  }

  function handleSubmit() {
    if (!id) return;
    const answer = (document.getElementById('answer') as HTMLInputElement).value.trim();
    problemApiWrapper.shortProblemResult(id, answer).then((data) => {
      setResult(data);
      refetch();
    });
  }

  return (
    <ProblemDetailPageTemplate
      data={data}
      handleSubmit={handleSubmit}
      isResult={result !== null && result !== undefined}
      resetResult={resetResult}
      isSubmittable={true}
    >
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 단답형 문제입니다. 답안 작성 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 단답형`}
      />
      <div className={contentWrapperStyle}>
        <div className={contentTitleStyle}>문제 설명</div>
        <div className={problemDescContentStyle}>
          <MarkdownBox>{data?.description}</MarkdownBox>
        </div>
      </div>
      <div className={resultWrapperStyle}>
        {result ? (
          <ColumnBox className={gapStyle}>
            <button
              className={isAnswerShown || result.isAnswer ? hiddenStyle : showAnswerButtonStyle}
              onClick={() => {
                setIsAnswerShown(true);
              }}
            >
              정답 보기
            </button>
            <ResultBox
              isCorrect={result.isAnswer}
              score={result.score}
              onClick={resetResult}
              text={isAnswerShown ? result.correctAnswer : result.userAnswer}
              isStandardAnswer={isAnswerShown}
            />
          </ColumnBox>
        ) : (
          <input
            id='answer'
            placeholder={`답변을 "${data?.isEnglish ? '영어로' : '한글로'}" 입력해주세요`}
            className={answerInputContentStyle}
            autoComplete='off'
            onFocus={resetResult}
            onKeyDown={onKeyDown}
          ></input>
        )}
      </div>
    </ProblemDetailPageTemplate>
  );
}
