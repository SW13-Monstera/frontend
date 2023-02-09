import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URLWithParam } from '../../../constants/url';
import { IProblemSetDataElement } from '../../../types/problemSet';
import roadmapImage from '../../../assets/images/roadmap.webp';
import {
  problemSetBoxStyle,
  problemSetDescStyle,
  problemSetDetailWrapperStyle,
  problemSetListPageContentStyle,
  problemSetListPageWrapperStyle,
  problemSetListStyle,
  problemSetTitleStyle,
  titleDescStyle,
  titleDetailWrapperStyle,
  titleStyle,
  titleWrapperStyle,
} from './style.css';
import { TextButton } from '../../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME } from '../../../types/button';
import problemSetData from '../../../mock/problemSet.json';

export const ProblemSetListPage = () => {
  const [problemSetDataList, setProblemSetDataList] = useState<IProblemSetDataElement[]>();

  useEffect(() => {
    const json: IProblemSetDataElement[] = JSON.parse(JSON.stringify(problemSetData)).default;
    setProblemSetDataList(json);
  }, []);

  return (
    <div className={problemSetListPageWrapperStyle}>
      <div className={problemSetListPageContentStyle}>
        <div className={titleWrapperStyle}>
          <img src={roadmapImage} width='80px' height='80px' />
          <div className={titleDetailWrapperStyle}>
            <h1 className={titleStyle}>면접대비 문제세트</h1>
            <h2 className={titleDescStyle}>
              주제별로 묶여있는 문제세트를 통해 CS 지식을 학습해보세요.
            </h2>
          </div>
        </div>
        <div className={problemSetListStyle}>
          {problemSetDataList?.map((problemSet) => (
            <Link to={URLWithParam.PROBLEM_SET_DETAIL(problemSet.id)} key={problemSet.id}>
              <div className={problemSetBoxStyle}>
                <div className={problemSetDetailWrapperStyle}>
                  <div className={problemSetTitleStyle}>{problemSet.setTitle}</div>
                  <div className={problemSetDescStyle}>문제 수 {problemSet.problems.length}개</div>
                </div>
                <TextButton theme={BUTTON_THEME.PRIMARY} size={BUTTON_SIZE.SMALL}>
                  시작하기
                </TextButton>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
