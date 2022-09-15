import { useLocation, useParams } from 'react-router-dom';
import KeywordBox from '../../Component/Box/KeywordBox';
import TextBox from '../../Component/Box/TextBox';
import {
  contentStyle,
  keywordListStyle,
  pageContentStyle,
  subtitleStyle,
  answerContentStyle,
} from './style.css';
import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { MarkdownBox } from '../../Component/Box/MarkdownBox';
import { ProblemDetailPageTemplate } from '../../Template/ProblemDetailPageTemplate';

export default function ResultPage() {
  const { id } = useParams();
  const userAnswer = useLocation().state as string;

  function handleSubmit() {
    if (!id) throw new Error('invalid id');
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  const { data: result, isLoading, mutate } = useMutation<ILongProblemResultData>(handleSubmit);

  useEffect(() => {
    mutate();
  }, []);

  if (!id) return <></>;
  if (isLoading) return <SkeletonLongProblemResultPage />;

  return (
    <>
      <ProblemDetailPageTemplate data={result} isResult={true}>
        <div className={pageContentStyle}>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <ul className={keywordListStyle}>
                {result?.keywords?.map(({ id, content, isExist }) => (
                  <KeywordBox name={content} isIncluded={isExist} key={id} />
                ))}
              </ul>
              <div className={answerContentStyle}>{userAnswer}</div>
            </div>
          </TextBox>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <div className={answerContentStyle}>
                <MarkdownBox>{result?.standardAnswer}</MarkdownBox>
              </div>
            </div>
          </TextBox>
        </div>
      </ProblemDetailPageTemplate>
    </>
  );
}
