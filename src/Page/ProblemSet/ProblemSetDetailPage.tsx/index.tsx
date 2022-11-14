import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { QuestionListElementBox } from '../../../Component/Box';
import { PROBLEM_TYPE } from '../../../constants/problem';
import { IProblemDetailResponseData } from '../../../types/api/problem';
import { TPartialProblemDetailResponseData } from '../../../types/problem';
import { IProblemSetDataElement, IProblemSetProblemsElement } from '../../../types/problemSet';
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
  const [problemList, setProblemList] = useState<TPartialProblemDetailResponseData[]>();

  useEffect(() => {
    import(
      isProduction ? '../../../mock/problemSet.json' : '../../../mock/problemSetDev.json'
    ).then((data) => {
      const json: IProblemSetDataElement[] = JSON.parse(JSON.stringify(data)).default;
      setProblemSetData(json[parseInt(setId)]);
    });
  }, []);

  useEffect(() => {
    problemSetData?.problems
      .reduce(
        async (prev: Promise<IProblemDetailResponseData[]>, curr: IProblemSetProblemsElement) => {
          const prevResult = await prev;
          let currResult = null;
          if (curr.type === PROBLEM_TYPE.LONG) {
            currResult = await problemApiWrapper.longProblemDetail(curr.id.toString());
          } else if (curr.type === PROBLEM_TYPE.SHORT) {
            currResult = await problemApiWrapper.shortProblemDetail(curr.id.toString());
          } else {
            currResult = await problemApiWrapper.multipleProblemDetail(curr.id.toString());
          }
          prevResult.push({ ...currResult, type: curr.type });
          return prev;
        },
        Promise.resolve([]),
      )
      .then((data: IProblemDetailResponseData[]) => {
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
                id={problem.id!}
                title={problem.title!}
                tags={problem.tags!}
                type={problem.type!}
                totalSubmission={problem.totalSubmission}
                correctSubmission={problem.correctSubmission}
                correctUserCnt={problem.correctUserCnt}
                isSolved={problem.isSolved}
                avgScore={problem.avgScore}
                topScore={problem.topScore}
                bottomScore={problem.bottomScore}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
