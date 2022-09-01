import { boxStyle, imageStyle, imageWrapperStyle } from './style.css';
import { Divider } from '../../Component/Divider';
import { ProfileLabel } from '../../Component/Utils/ProfileLabel';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME } from '../../types/button';

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
  jobObjective: string;
  coreTech: string[];
  statistics: any;
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
      <div>
        <div className={imageWrapperStyle}>
          <img src={imageUrl} className={imageStyle} />
        </div>
        <div>{nickname}</div>
        <div>{rank}위</div>
        <div>{score}점</div>
      </div>
      <Divider />
      <div>
        <ProfileLabel name={'이메일'} value={email} />
        <ProfileLabel name={'전공'} value={major} />
        <ProfileLabel name={'직업'} value={job} />
        <ProfileLabel name={'희망직무'} value={jobObjective} />
      </div>
      <Divider />
      <div>통계</div>
      <Divider />
      <TextButton theme={BUTTON_THEME.PRIMARY} size={BUTTON_SIZE.MEDIUM}>
        프로필 수정하기
      </TextButton>
    </div>
  );
};
