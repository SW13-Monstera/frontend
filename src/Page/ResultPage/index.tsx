import { useLocation, useParams } from 'react-router-dom';
import KeywordBox from '../../Component/Box/KeywordBox';
import {
  contentStyle,
  keywordListStyle,
  subtitleStyle,
  answerContentStyle,
  standardAnswerContentStyle,
  myScoreStyle,
  numberLineChartWrapperStyle,
  numberLineChartTitleStyle,
  numberLineChartStrongTitleStyle,
  contentElementStyle,
  contentListStyle,
  scoreEvaluationWrapperStyle,
} from './style.css';
import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { MarkdownBox } from '../../Component/Box/MarkdownBox';
import { MetaTag } from '../utils/MetaTag';
import { SplitProblemDetailPageTemplate } from '../../Template/SplitProblemDetailPageTemplate';
import { TextBox } from '../../Component/Box';
import { MyScoreBox } from '../../Component/Box/MyScoreBox';
import { NumberLineChart } from '../../Component/Chart/NumberLineChart';
import { ILongProblemResultLocationState } from '../../types/problem';
import { INVALID_ID_ERROR } from '../../errors';
import { COLOR } from '../../constants/color';
import { ResultAssessment } from './components/ResultAssessment';

const USER_ANSWER_DOM_ID = 'user-answer';

export default function ResultPage() {
  const { id } = useParams();
  const { userAnswer, title } = useLocation().state as ILongProblemResultLocationState;
  const { data: result, isLoading, mutate } = useMutation<ILongProblemResultData>(handleSubmit);

  function handleSubmit() {
    if (!id) throw INVALID_ID_ERROR;
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  const createKeywordIdxList = () => {
    const keywordIdxList =
      result?.keywords
        .filter((e) => e.idx.length > 0)
        .map((keyword) => keyword.idx)
        .sort((a, b) => a[0] - b[0]) ?? [];

    let kcnt = 0;
    const refinedKeywordIdxList = keywordIdxList
      .map((_, idx) => {
        const kidx: number = idx + kcnt;
        if (
          idx !== keywordIdxList.length - 1 &&
          keywordIdxList[kidx][1] > keywordIdxList[kidx + 1][0]
        ) {
          kcnt++;
          return [
            Math.min(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
            Math.max(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
          ];
        } else {
          return keywordIdxList[kidx];
        }
      })
      .filter((e) => e);
    return refinedKeywordIdxList;
  };

  const createUserAnswerDOM = () => {
    const keywordIdxList = createKeywordIdxList();
    const userAnswerHTML =
      keywordIdxList.length > 0
        ? `<span>${result?.userAnswer.substring(0, keywordIdxList[0][0])}</span>` +
          keywordIdxList
            ?.map((keywordIdx, idx) =>
              idx !== keywordIdxList.length - 1
                ? `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                    keywordIdx[0],
                    keywordIdx[1] + 1,
                  )}</span>` +
                  `<span>${result?.userAnswer.substring(
                    keywordIdx[1] + 1,
                    keywordIdxList[idx + 1][0],
                  )}</span>`
                : `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                    keywordIdx[0],
                    keywordIdx[1] + 1,
                  )}</span>` + `<span>${result?.userAnswer.substring(keywordIdx[1] + 1)}</span>`,
            )
            .join('')
        : result?.userAnswer;
    document
      .getElementById(USER_ANSWER_DOM_ID)
      ?.insertAdjacentHTML('afterbegin', userAnswerHTML ?? '');
  };

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      createUserAnswerDOM();
    }
  }, [result]);

  if (!id) return <></>;
  if (isLoading)
    return (
      <SkeletonLongProblemResultPage title={title} userAnswer={userAnswer} id={id!} tags={[]} />
    );

  return (
    <>
      <MetaTag title='CS Broker - 채점 결과' />
      <SplitProblemDetailPageTemplate
        sizes={[50, 50]}
        data={result}
        handleSubmit={handleSubmit}
        isResult={true}
        isResultPage={true}
        leftSideContent={
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>모범 답안</h3>
            <TextBox>
              <div className={standardAnswerContentStyle}>
                <MarkdownBox>{result?.standardAnswer}</MarkdownBox>
              </div>
            </TextBox>
          </div>
        }
        rightSideContent={
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>내 답안</h3>
            <TextBox id={USER_ANSWER_DOM_ID} className={answerContentStyle} />

            <h4>키워드 채점 기준</h4>
            <ul className={keywordListStyle}>
              {result?.keywords?.map(({ id, content, isExist }) => (
                <KeywordBox name={content} isIncluded={isExist} key={id} />
              ))}
            </ul>
            <h4>내용 채점 기준</h4>
            <ul className={contentListStyle}>
              {result?.contents?.map(({ id, content, isExist }) => (
                <li key={id} className={contentElementStyle[isExist ? 'true' : 'false']}>
                  {content}
                </li>
              ))}
            </ul>
            <div className={scoreEvaluationWrapperStyle}>
              <MyScoreBox score={result?.score} className={myScoreStyle} />
              <ResultAssessment gradingHistoryId={result?.gradingHistoryId} />
            </div>
          </div>
        }
        bottomContent={
          <div className={numberLineChartWrapperStyle}>
            <div className={numberLineChartTitleStyle}>
              나는 <strong className={numberLineChartStrongTitleStyle}>평균 중 몇점</strong>일까?
            </div>
            <NumberLineChart myScore={result?.score} avgScore={result?.avgScore} />
          </div>
        }
      />
    </>
  );
}
