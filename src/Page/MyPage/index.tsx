import { ColorLabel } from '../../Component/Utils/ColorLabel';
import { COLOR } from '../../constants/color';
import { ProfileBox } from '../../Organism/ProfileBox';
import { PageTemplate } from '../../Template';
import { colorLabelListStyle, pageWrapperStyle, rightSideWrapperStyle } from './style.css';
import mockData from '../../mock/mypage.json';
import { ProblemListBox } from '../../Component/Box/ProblemListBox';

const colorLabelList = [
  { color: COLOR.POINT1, name: '서술형', type: 'long' },
  { color: COLOR.POINT2, name: '단답형', type: 'short' },
  { color: COLOR.POINT3, name: '객관식', type: 'multiple' },
];

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
      <div className={pageWrapperStyle}>
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
        <div className={rightSideWrapperStyle}>
          <div className={colorLabelListStyle}>
            {colorLabelList.map((e) => (
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
