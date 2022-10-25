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
} from './style.css';
import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { MarkdownBox } from '../../Component/Box/MarkdownBox';
import { MetaTag } from '../utils/MetaTag';
import { SplitProblemDetailPageTemplate } from '../../Template/SplitProblemDetailPageTemplate';
import { TextBox } from '../../Component/Box';
import { MyScoreBox } from '../../Component/Box/MyScoreBox';
import { NumberLineChart } from '../../Component/Chart/NumberLineChart';
import { ILongProblemResultLocationState } from '../../types/problem';
import { INVALID_ID_ERROR } from '../../errors';
import { useEffect } from 'react';

export default function ResultPage() {
  const { id } = useParams();
  const { userAnswer, title } = useLocation().state as ILongProblemResultLocationState;

  function handleSubmit() {
    if (!id) throw INVALID_ID_ERROR;
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  const { data: result, isLoading, mutate } = useMutation<ILongProblemResultData>(handleSubmit);

  useEffect(() => {
    mutate();
  }, []);

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
            <MyScoreBox score={result?.score} className={myScoreStyle} />
          </div>
        }
        rightSideContent={
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>내 답안</h3>
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
            <TextBox className={answerContentStyle}>{userAnswer}</TextBox>
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
