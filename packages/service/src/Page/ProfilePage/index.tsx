import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { ProfileBox } from '../../Organism/ProfileBox';
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
import { RESULT_TYPE } from '../../constants/problem';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserInfo } from 'auth/utils/userInfo';
import { URL } from '../../constants/url';

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

export const ProfilePage = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  if (!userId) throw new Error('유저 아이디 없음');

  const { data: profileData } = useQuery<IProfileData>(
    ['getUserInfoData', userId],
    () => userApiWrapper.getUserInfoData(userId),
    {
      retry: false,
      onError: () => {
        navigate(URL.PAGE_NOT_FOUND);
      },
    },
  );
  const { data: problemStatsData } = useQuery<IProblemStatsData>(
    ['getStatsData', userId],
    () => userApiWrapper.getStats(userId),
    { retry: false },
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
    <>
      <MetaTag title='CS Broker - 프로필' />
      <div className={pageWrapperStyle}>
        <div className={pageContentWrapperStyle}>
          <div className={leftSideWrapperStyle}>
            <h2 className={pageTitleStyle}>{profileData?.username}님의 프로필</h2>
            {profileData && problemStatsData ? (
              <ProfileBox
                profileData={{
                  ...profileData,
                  rank: problemStatsData.rank,
                  score: problemStatsData.score,
                  statistics: getStatistics(),
                }}
                isMine={userId === getUserInfo()?.id}
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
                  problems={problemStatsData.correctAnsweredProblem}
                  type={RESULT_TYPE.CORRECT}
                />
                <ProblemListBox
                  problems={problemStatsData.wrongAnsweredProblem}
                  type={RESULT_TYPE.WRONG}
                />
                <ProblemListBox
                  problems={problemStatsData.partialAnsweredProblem}
                  type={RESULT_TYPE.PARTIAL}
                />
              </ColumnBox>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
