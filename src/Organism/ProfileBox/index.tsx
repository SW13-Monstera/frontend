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
  imageUploadBackgroundStyle,
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
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { IChartElement } from '../../types/chart';
import { UploadIcon } from '../../Icon/UploadIcon';
import csbrokerLogo from '../../favicon.svg';
import { useCallback, useRef, useState } from 'react';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { toast } from 'react-toastify';

interface IProfileBox {
  profileData: IProfileData;
}

interface IProfileData {
  username: string;
  profileImgUrl: string;
  rank: number;
  score: number;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  major: string;
  job: string;
  jobObjective: string;
  techs: string[];
  statistics: IChartElement[];
}

export const ProfileBox = ({ profileData }: IProfileBox) => {
  const navigate = useNavigate();
  const {
    username,
    profileImgUrl,
    rank,
    score,
    githubUrl,
    linkedinUrl,
    email,
    major,
    job,
    jobObjective,
    techs,
    statistics,
  } = profileData;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imgUrl, setImgUrl] = useState<string>(profileImgUrl);

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    commonApiWrapper.uploadImg(formData).then((res) => {
      toast('업로드가 완료되었습니다.');
      setImgUrl(res);
    });
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div className={boxStyle}>
      <div className={section1Style}>
        <div className={imageWrapperStyle}>
          <img src={imgUrl} className={imageStyle} />
          <div className={imageUploadBackgroundStyle}>
            <UploadIcon width='2rem' height='2rem' fill={COLOR.WHITE} />
          </div>
          <input
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={onUploadImage}
            style={{ display: 'none' }}
          />
          <img
            src={imgUrl === null ? csbrokerLogo : imgUrl}
            className={imageStyle}
            onClick={onUploadImageButtonClick}
          />
        </div>
        <div className={section1DataStyle}>
          <div>{username}</div>
          <div className={section1NumericDataStyle}>
            <div>{rank}위 </div>
            <div>{score}점</div>
          </div>
          <div className={linkButtonListStyle}>
            {linkedinUrl && (
              <a className={linkButtonByDomainStyle.linkedin} href={linkedinUrl} role='button'>
                <img src={linkedinLogo} width='1.5625rem' height='1.5625rem' />
              </a>
            )}
            {githubUrl && (
              <a className={linkButtonByDomainStyle.github} href={githubUrl} role='button'>
                <img src={githubLogo} width='1.5625rem' height='1.5625rem' />
              </a>
            )}
          </div>
        </div>
      </div>
      <Divider />
      <div className={section2Style}>
        <ProfileLabel name={'이메일'} value={email} />
        <ProfileLabel name={'전공'} value={major === null ? '선택 안 함' : major} />
        <ProfileLabel name={'직업'} value={job === null ? '선택 안 함' : job} />
        <ProfileLabel
          name={'희망직무'}
          value={jobObjective === null ? '선택 안 함' : jobObjective}
        />
        <ProfileLabel
          name={'주요 기술'}
          value={
            techs.length === 0 ? (
              '선택 안 함'
            ) : (
              <ul className={coreTechListStyle}>
                {techs.map((e) => (
                  <TechTagBox name={e} key={e} color={COLOR.TAG2} />
                ))}
              </ul>
            )
          }
        />
      </div>
      <Divider />
      <div className={section3Style}>
        <div className={labelTitleStyle}>통계</div>
        <div className={chartWrapperStyle}>
          <DoughnutChart data={createCategoryChartData(statistics)} />
        </div>
      </div>
      <Divider />
      <TextButton
        theme={BUTTON_THEME.SECONDARY}
        size={BUTTON_SIZE.LARGE_MEDIUM}
        className={editButtonStyle}
        onClick={() => {
          navigate(URL.USER_DATA_EDIT);
        }}
      >
        프로필 수정하기
      </TextButton>
    </div>
  );
};
