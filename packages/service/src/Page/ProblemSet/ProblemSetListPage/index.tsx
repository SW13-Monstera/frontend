import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { URLWithParam } from '../../../constants/url';
import roadmapImage from '../../../assets/images/roadmap.webp';
import {
  descriptionWrapStyle,
  problemSetBoxStyle,
  problemSetCountStyle,
  problemSetDescStyle,
  problemSetDetailWrapperStyle,
  problemSetListPageContentStyle,
  problemSetListPageWrapperStyle,
  problemSetListStyle,
  problemSetTitleStyle,
  startButtonWrapStyle,
  titleDescStyle,
  titleDetailWrapperStyle,
  titleStyle,
  titleWrapperStyle,
} from './style.css';
import { TextButton } from '../../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME } from '../../../types/button';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';

export const ProblemSetListPage = () => {
  const { data: problemSetList } = useQuery(['problemset-list'], problemApiWrapper.problemSetList);
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
          {problemSetList?.map(({ id, name, problemCnt, description }) => (
            <Link to={URLWithParam.PROBLEM_SET_DETAIL(id)} key={id}>
              <div className={problemSetBoxStyle}>
                <div className={problemSetDetailWrapperStyle}>
                  <div className={problemSetTitleStyle}>{name}</div>
                  <div className={descriptionWrapStyle}>
                    <TextButton
                      theme={BUTTON_THEME.PRIMARY}
                      size={BUTTON_SIZE.SMALL}
                      className={startButtonWrapStyle}
                    >
                      시작하기
                    </TextButton>
                    <div className={problemSetDescStyle}>{description}</div>
                  </div>

                  <div className={problemSetCountStyle}>
                    문제 수 <b>{problemCnt}</b>개
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
