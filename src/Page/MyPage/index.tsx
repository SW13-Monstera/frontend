import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import {
  colorLabelListStyle,
  leftSideWrapperStyle,
  pageContentWrapperStyle,
  pageTitleStyle,
  pageWrapperStyle,
  problemStatsWrapperStyle,
  rightSideWrapperStyle,
} from './style.css';
import { ProblemListBox } from '../../Component/Box/ProblemListBox';
import { COLOR_LABEL_LIST } from '../../constants/colorLabel';
import { MetaTag } from '../utils/MetaTag';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { IMypageProblem } from '../../types/problem';
import { DB, DS, NETWORK, OS } from '../../constants/category';
import { ColumnBox } from '../../Component/Box/CustomBox';
import { IProfileData } from '../../types/api/user';
import { useQuery } from 'react-query';

interface ITags {
  os: number;
  ds: number;
  db: number;
  network: number;
}

interface IProblemStatsData {
  correctAnsweredProblem: IMypageProblem[];
  wrongAnsweredProblem: IMypageProblem[];
  partialAnsweredProblem: IMypageProblem[];
  count: ITags;
  rank: number;
  score: number;
}

export const MyPage = () => {
  const { data: profileData } = useQuery<IProfileData>(
    'getUserInfoData',
    () => userApiWrapper.getUserInfoData(),
    { refetchOnWindowFocus: false },
  );
  const { data: problemStatsData } = useQuery<IProblemStatsData>(
    'getStatsData',
    () => userApiWrapper.getStats(),
    { refetchOnWindowFocus: false },
  );

  const getStatistics = () => {
    if (problemStatsData) {
      const sum =
        (problemStatsData.count.db ?? 0) +
        (problemStatsData.count.ds ?? 0) +
        (problemStatsData.count.network ?? 0) +
        (problemStatsData.count.os ?? 0);
      return [
        { name: OS, value: ((problemStatsData.count.os ?? 0) / sum) * 100 },
        { name: DB, value: ((problemStatsData.count.db ?? 0) / sum) * 100 },
        { name: DS, value: ((problemStatsData.count.ds ?? 0) / sum) * 100 },
        { name: NETWORK, value: ((problemStatsData.count.network ?? 0) / sum) * 100 },
      ];
    }
    return [];
  };

  return (
    <PageTemplate>
      <MetaTag title='CS Broker - 마이페이지' />
      <div className={pageWrapperStyle}>
        <div className={pageContentWrapperStyle}>
          <div className={leftSideWrapperStyle}>
            <h2 className={pageTitleStyle}>마이 페이지</h2>
            {profileData && problemStatsData ? (
              <ProfileBox
                profileData={{
                  ...profileData,
                  rank: problemStatsData.rank,
                  score: problemStatsData.score,
                  statistics: getStatistics(),
                }}
              />
            ) : null}
          </div>
          <div className={rightSideWrapperStyle}>
            <div className={colorLabelListStyle}>
              {COLOR_LABEL_LIST.map((e) => (
                <ColorLabel color={e.color} name={e.name} key={e.name} />
              ))}
            </div>
            {problemStatsData !== undefined ? (
              <ColumnBox className={problemStatsWrapperStyle}>
                <ProblemListBox
                  title='맞은 문제'
                  problems={problemStatsData.correctAnsweredProblem}
                />
                <ProblemListBox
                  title='틀린 문제'
                  problems={problemStatsData.wrongAnsweredProblem}
                />
                <ProblemListBox
                  title='부분 점수를 받은 문제'
                  problems={problemStatsData.partialAnsweredProblem}
                />
              </ColumnBox>
            ) : null}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
