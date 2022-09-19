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
  strongDescriptionStyle,
} from './style.css';
import { CountUpBox } from '../../Component/Box/CountUpBox';
import { QuestionListElementBox } from '../../Component/Box';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import {
  IProblemListResponseData,
  IProblemListResponseDataContents,
} from '../../types/api/problem';
import { ColumnBox } from '../../Component/Box/CustomBox';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';

const getProblemList = () => {
  const params = { page: 0, size: 4 };
  return problemApiWrapper
    .problemList(params)
    .then((data: IProblemListResponseData) => data.contents);
};

function MainPage() {
  const { data: problems } = useQuery<IProblemListResponseDataContents[]>(
    'problemListMain',
    getProblemList,
  );

  return (
    <PageTemplate>
      <MetaTag
        title='CS Broker'
        description='Computer Science 문제를 풀고
AI 기반 문장 유사도 평가 기법을 채점받아
스스로의 CS 역량을 평가할 수 있는 곳입니다.'
        keywords='computer science, database, operating system, data structure, network, developer, '
      />
      <>
        <DefaultSlider />
        <div className={pageWrapperStyle}>
          <img src={logo} className={logoTitleStyle}></img>
          <div className={descriptionStyle}>
            AI 기반 서술형 채점 기법을 통해 <br />
            다양한 유형의 <strong className={strongDescriptionStyle}>Computer Science</strong>{' '}
            문제를 풀고 <br />
            스스로 CS 지식을 학습할 수 있는 사이트입니다.
          </div>
          <div className={statisticsWrapperStyle}>
            <CountUpBox title='전체 문제 수' number={250} />
            <CountUpBox title='채점 가능한 문제 수' number={115} />
            <CountUpBox title='전체 사용자 수' number={320} />
          </div>
          <ColumnBox>
            <div className={problemListTitleStyle}>오늘의 문제</div>
            <div className={problemListWrapperStyle}>
              {problems?.map((problem) => (
                <QuestionListElementBox
                  key={problem.id.toString()}
                  id={problem.id}
                  title={problem.title}
                  tags={problem.tags}
                  totalSolved={problem.totalSolved}
                  avgScore={problem.avgScore}
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
