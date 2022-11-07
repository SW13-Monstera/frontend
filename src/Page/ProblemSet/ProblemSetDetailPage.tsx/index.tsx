import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { QuestionListElementBox } from '../../../Component/Box';
import { IProblemListElement, IProblemSetDataElement } from '../../../types/problemSet';
import { isProduction } from '../../../utils/isProduction';
import { ErrorPage } from '../../Error/ErrorPage';
import { MetaTag } from '../../utils/MetaTag';
import {
  problemSetDetailWrapperStyle,
  problemSetListStyle,
  problemSetTitleStyle,
} from './style.css';

export const ProblemSetDetailPage = () => {
  const { setId } = useParams();

  if (!setId) return <ErrorPage />;
  const [problemSetData, setProblemSetData] = useState<IProblemSetDataElement>();
  const [problemList, setProblemList] = useState<IProblemListElement[]>();

  useEffect(() => {
    if (isProduction) {
      import('../../../mock/problemSet.json').then((data) =>
        setProblemSetData(data.default[parseInt(setId)]),
      );
    } else {
      import('../../../mock/problemSetDev.json').then((data) =>
        setProblemSetData(data.default[parseInt(setId)]),
      );
    }
  }, []);

  useEffect(() => {
    problemSetData?.problems
      .reduce<any>(async (prev, curr) => {
        const prevResult = await prev;
        let currResult = null;
        if (curr.type === 'long') {
          currResult = await problemApiWrapper.longProblemDetail(curr.id.toString());
        } else if (curr.type === 'short') {
          currResult = await problemApiWrapper.shortProblemDetail(curr.id.toString());
        } else {
          currResult = await problemApiWrapper.multipleProblemDetail(curr.id.toString());
        }
        prevResult.push({ ...currResult, type: curr.type });
        return prev;
      }, Promise.resolve([]))
      .then((data: IProblemListElement[]) => {
        setProblemList(data);
      });
  }, [problemSetData]);

  return (
    <>
      <MetaTag
        title={`CS Broker - ${problemSetData?.setTitle}`}
        description={`${problemSetData?.setTitle}에 관한 문제 세트입니다.`}
        keywords={`${problemSetData?.setTitle}, 서술형, 객관식, 단답형`}
      />
      <div className={problemSetDetailWrapperStyle}>
        <div className={problemSetTitleStyle}>{problemSetData?.setTitle}</div>
        <div className={problemSetListStyle}>
          {problemList?.map((problem) => {
            return (
              <QuestionListElementBox
                key={problem.id}
                id={problem.id}
                title={problem.title}
                tags={problem.tags}
                type={problem.type}
                totalSubmission={problem.totalSubmission}
                avgScore={problem.avgScore}
                isSolved={problem.isSolved}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
