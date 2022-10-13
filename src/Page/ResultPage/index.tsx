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
  evaluationButtonListStyle,
  evaluationButtonListWrapperStyle,
} from './style.css';
import { ASSESSMENT_TYPE, ILongProblemResultData, TAssessment } from '../../types/api/problem';
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
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { TextButton } from '../../Component/Button';

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
      <SkeletonLongProblemResultPage title={title} userAnswer={userAnswer} id={id} tags={[]} />
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
            <h3 className={subtitleStyle}>내 답안</h3>
            <ul className={keywordListStyle}>
              {result?.keywords?.map(({ id, content, isExist }) => (
                <KeywordBox name={content} isIncluded={isExist} key={id} />
              ))}
            </ul>
            <div className={answerContentStyle}>{userAnswer}</div>
          </div>
        }
        rightSideContent={
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>모범 답안</h3>
            <TextBox>
              <div className={standardAnswerContentStyle}>
                <MarkdownBox>{result?.standardAnswer}</MarkdownBox>
              </div>
            </TextBox>
            <MyScoreBox score={result?.score} className={myScoreStyle} />
            <div className={evaluationButtonListWrapperStyle}>
              <div>채점 결과는 어땠나요?</div>
              <div className={evaluationButtonListStyle}>
                {[
                  { label: '😀 좋아요', value: ASSESSMENT_TYPE.GOOD },
                  { label: '😐 적당해요', value: ASSESSMENT_TYPE.NORMAL },
                  { label: '🙁 별로예요', value: ASSESSMENT_TYPE.BAD },
                ].map((e) => (
                  <TextButton
                    type={BUTTON_TYPE.BUTTON}
                    theme={BUTTON_THEME.TERTIARY}
                    size={BUTTON_SIZE.SMALL}
                    onClick={() => {
                      if (!id) throw new Error('invalid id');
                      problemApiWrapper.assessment(id, {
                        assessmentType: e.value as TAssessment,
                      });
                    }}
                    key={e.value}
                  >
                    {e.label}
                  </TextButton>
                ))}
              </div>
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
