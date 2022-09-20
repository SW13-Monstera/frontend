import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import {
  colorLabelListStyle,
  pageContentWrapperStyle,
  pageTitleStyle,
  pageWrapperStyle,
  problemStatsWrapperStyle,
  rightSideWrapperStyle,
} from './style.css';
import mockData from '../../mock/mypage.json';
import { ProblemListBox } from '../../Component/Box/ProblemListBox';
import { COLOR_LABEL_LIST } from '../../constants/colorLabel';
import { MetaTag } from '../utils/MetaTag';
import { useEffect, useState } from 'react';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { IMypageProblem } from '../../types/problem';
import { DB, DS, NETWORK, OS } from '../../constants/category';
import { ColumnBox } from '../../Component/Box/CustomBox';

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
}

interface IProfileData {
  id: string;
  email: string;
  username: string;
  role: string;
  major: string;
  job: string;
  jobObjective: string;
  techs: string[];
  githubUrl: string;
  linkedinUrl: string;
}

export const MyPage = () => {
  const [problemStatsData, setProblemStatsData] = useState<IProblemStatsData>();
  const [profileData, setProfileData] = useState<IProfileData>();

  useEffect(() => {
    userApiWrapper.getStats().then((res: IProblemStatsData) => {
      setProblemStatsData(res);
    });

    userApiWrapper.getUserInfo().then((res: IProfileData) => {
      setProfileData(res);
    });
  }, []);

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

  const { imageUrl, rank, score } = mockData;

  return (
    <PageTemplate>
      <MetaTag title='CS Broker - 마이페이지' />
      <div className={pageWrapperStyle}>
        <h2 className={pageTitleStyle}>마이 페이지</h2>
        <div className={pageContentWrapperStyle}>
          {profileData && problemStatsData ? (
            <ProfileBox
              profileData={{
                ...profileData,
                imageUrl,
                rank,
                score,
                statistics: getStatistics(),
              }}
            />
          ) : null}
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
