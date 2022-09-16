import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import {
  colorLabelListStyle,
  pageTitleStyle,
  pageWrapperStyle,
  rightSideWrapperStyle,
} from './style.css';
import mockData from '../../mock/mypage.json';
import { ProblemListBox } from '../../Component/Box/ProblemListBox';
import { COLOR_LABEL_LIST } from '../../constants/colorLabel';
import { MetaTag } from '../utils/MetaTag';

export const MyPage = () => {
  const {
    nickname,
    imageUrl,
    rank,
    score,
    githubUrl,
    linkedinUrl,
    email,
    major,
    job,
    jobObjective,
    coreTech,
    statistics,
    correctProblems,
    wrongProblems,
    partialProblems,
  } = mockData;

  return (
    <PageTemplate>
      <MetaTag title='CS Broker - 마이페이지' />
      <div className={pageWrapperStyle}>
        <div>
          <h2 className={pageTitleStyle}>마이 페이지</h2>
          <ProfileBox
            profileData={{
              nickname,
              imageUrl,
              rank,
              score,
              githubUrl,
              linkedinUrl,
              email,
              major,
              job,
              jobObjective,
              coreTech,
              statistics,
            }}
          />
        </div>
        <div className={rightSideWrapperStyle}>
          <div className={colorLabelListStyle}>
            {COLOR_LABEL_LIST.map((e) => (
              <ColorLabel color={e.color} name={e.name} key={e.name} />
            ))}
          </div>
          <ProblemListBox title='맞은 문제' problems={correctProblems} />
          <ProblemListBox title='틀린 문제' problems={wrongProblems} />
          <ProblemListBox title='부분 점수를 받은 문제' problems={partialProblems} />
        </div>
      </div>
    </PageTemplate>
  );
};
