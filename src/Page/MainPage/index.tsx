import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { PageTemplate } from '../../Template';
import logo from '../../assets/images/csbroker.png';
import {
  pageWrapperStyle,
  logoTitleStyle,
  descriptionStyle,
  statisticsWrapperStyle,
  problemListWrapperStyle,
  problemListTitleStyle,
} from './style.css';
import { CountUpBox } from '../../Component/Box/CountUpBox';
import { QuestionListElementBox } from '../../Component/Box';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useEffect, useState } from 'react';
import {
  IProblemListResponseData,
  IProblemListResponseDataContents,
} from '../../types/api/problem';
import { ColumnBox } from '../../Component/Box/CustomBox';

function MainPage() {
  const [problems, setProblems] = useState<IProblemListResponseDataContents[]>([]);

  function getProblemList() {
    const params = { page: 0, size: 4 };
    problemApiWrapper.problemList(params).then((data: IProblemListResponseData) => {
      setProblems(data.contents);
    });
  }

  useEffect(() => {
    getProblemList();
  }, []);

  return (
    <PageTemplate>
      <>
        <DefaultSlider />
        <div className={pageWrapperStyle}>
          <img src={logo} className={logoTitleStyle}></img>
          <div className={descriptionStyle}>
            Computer Science 문제를 풀고 <br />
            AI 기반 문장 유사도 평가 기법을 채점받아 <br />
            스스로의 CS 역량을 평가할 수 있는 곳입니다.
          </div>
          <div className={statisticsWrapperStyle}>
            <CountUpBox title='전체 문제 수' number={250} />
            <CountUpBox title='채점 가능한 문제 수' number={115} />
            <CountUpBox title='전체 사용자 수' number={320} />
          </div>
          <ColumnBox>
            <div className={problemListTitleStyle}>오늘의 문제</div>
            <div className={problemListWrapperStyle}>
              {problems.map((problem) => (
                <QuestionListElementBox
                  key={problem.id.toString()}
                  id={problem.id.toString()}
                  title={problem.title}
                  tagList={problem.tags}
                  numberSolved={problem.totalSolved}
                  averageScore={problem.avgScore}
                  type={problem.type}
                />
              ))}
            </div>
          </ColumnBox>
        </div>
      </>
    </PageTemplate>
  );
}
export default MainPage;
