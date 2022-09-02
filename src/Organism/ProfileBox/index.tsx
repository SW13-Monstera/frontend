import {
  boxStyle,
  chartWrapperStyle,
  coreTechListStyle,
  editButtonStyle,
  imageStyle,
  imageWrapperStyle,
  labelTitleStyle,
  linkButtonByDomainStyle,
  linkButtonListStyle,
  section1DataStyle,
  section1NumericDataStyle,
  section1Style,
  section2Style,
  section3Style,
} from './style.css';
import { Divider } from '../../Component/Divider';
import { ProfileLabel } from '../../Component/Utils/ProfileLabel';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME } from '../../types/button';
import { COLOR } from '../../constants/color';
import linkedinLogo from '../../assets/images/linkedin.png';
import githubLogo from '../../assets/icons/github.svg';
import { TechTagBox } from '../../Component/Box/TechTagBox';
import { DoughnutChart } from '../../Component/Chart/DoughnutChart';
import { createCategoryChartData } from '../../utils/createChartData';

const CATEGORY_COLOR_MAP = [
  { category: 'OS', color: COLOR.POINT1 },
  { category: 'DB', color: COLOR.POINT2 },
  { category: 'Data Structure', color: COLOR.POINT3 },
  { category: 'Network', color: COLOR.POINT4 },
];

interface IProfileBox {
  profileData: IProfileData;
}

interface IProfileData {
  nickname: string;
  imageUrl: string;
  rank: number;
  score: number;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  major: string;
  job: string;
  jobObjective: string[];
  coreTech: string[];
  statistics: any[];
}

export const ProfileBox = ({ profileData }: IProfileBox) => {
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
  } = profileData;
  return (
    <div className={boxStyle}>
      <div className={section1Style}>
        <div className={imageWrapperStyle}>
          <img src={imageUrl} className={imageStyle} />
        </div>
        <div className={section1DataStyle}>
          <div>{nickname}</div>
          <div className={section1NumericDataStyle}>
            <div>{rank}위 </div>
            <div>{score}점</div>
          </div>
          <div className={linkButtonListStyle}>
            <a className={linkButtonByDomainStyle.linkedin} href={linkedinUrl} role='button'>
              <img src={linkedinLogo} width='25px' height='25px' />
            </a>
            <a className={linkButtonByDomainStyle.github} href={githubUrl} role='button'>
              <img src={githubLogo} width='25px' height='25px' />
            </a>
          </div>
        </div>
      </div>
      <Divider />
      <div className={section2Style}>
        <ProfileLabel name={'이메일'} value={email} />
        <ProfileLabel name={'전공'} value={major} />
        <ProfileLabel name={'직업'} value={job} />
        <ProfileLabel
          name={'희망직무'}
          value={
            <ul className={coreTechListStyle}>
              {jobObjective.map((e) => (
                <TechTagBox name={e} key={e} color={COLOR.TAG1} />
              ))}
            </ul>
          }
        />
        <ProfileLabel
          name={'주요 기술'}
          value={
            <ul className={coreTechListStyle}>
              {coreTech.map((e) => (
                <TechTagBox name={e} key={e} color={COLOR.TAG2} />
              ))}
            </ul>
          }
        />
      </div>
      <Divider />
      <div className={section3Style}>
        <div className={labelTitleStyle}>통계</div>
        <div className={chartWrapperStyle}>
          <DoughnutChart data={createCategoryChartData(statistics.map((e) => e.value))} />
        </div>
      </div>
      <Divider />
      <TextButton
        theme={BUTTON_THEME.SECONDARY}
        size={BUTTON_SIZE.LARGE_MEDIUM}
        className={editButtonStyle}
      >
        프로필 수정하기
      </TextButton>
    </div>
  );
};
