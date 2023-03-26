import {
  boxStyle,
  chartWrapperStyle,
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
  editButtonListStyle,
  coreTechListStyle,
  defaultImageStyle,
  userNameTextStyle,
  section1NumberStyle,
  section1UnitStyle,
  section1LeftStyle,
} from './style.css';
import { Divider } from '../../Component/Divider';
import { ProfileLabel } from '../../Component/Utils/ProfileLabel';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME } from '../../types/button';
import { COLOR } from '../../constants/color';
import linkedinLogo from '../../assets/images/linkedin.png';
import githubLogo from '../../assets/icons/github.svg';
import { DoughnutChart } from '../../Component/Chart/DoughnutChart';
import { createCategoryChartData } from '../../utils/createChartData';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { IChartElement } from '../../types/chart';
import { UploadIcon } from '../../Icon/UploadIcon';
import { useCallback, useRef, useState } from 'react';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { toast } from 'react-toastify';
import { RowBox } from '../../Component/Box/CustomBox';
import { IProfileData } from '../../types/api/user';
import { TechTagBox } from '../../Component/Box/TechTagBox';
import userImage from '../../assets/icons/mypage-icon.svg';
import { formatNumber } from '../../utils/formatNumber';
import { themeColors } from '../../styles/theme.css';
import { useMutation } from 'react-query';

interface IProfileBox {
  profileData: IProfileBoxData;
  isMine: boolean;
}

interface IProfileBoxData extends IProfileData {
  rank: number;
  score: number;
  statistics: IChartElement[];
}

export const ProfileBox = ({ profileData, isMine }: IProfileBox) => {
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
  const [imgUrl, setImgUrl] = useState<string | null>(profileImgUrl ?? null);

  const uploadImage = async () => {
    const files = inputRef.current?.files;
    if (!files) return;

    const formData = new FormData();
    formData.append('image', files[0]);
    console.log(files[0]);
    const response = await commonApiWrapper.uploadImg(formData);

    toast('업로드가 완료되었습니다.');
    setImgUrl(response.data);
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const { mutate: uploadProfileImage } = useMutation(uploadImage, {
    onError: (err: { response: { status: number } }) => {
      if (err.response.status === 413) {
        toast.error('이미지 사이즈가 너무 커요. 다른 사진으로 다시 시도해주세요. ');
      } else {
        toast.error('이미지 업로드에 실패했어요. 다시 시도해주세요.');
      }
    },
  });

  return (
    <div className={boxStyle}>
      <div className={section1Style}>
        <div className={section1LeftStyle}>
          <div className={imageWrapperStyle[isMine ? 'isMine' : 'others']}>
            {isMine ? (
              <>
                <label htmlFor='profile-image' className={imageUploadBackgroundStyle}>
                  <UploadIcon width='2rem' height='2rem' fill={COLOR.WHITE} />
                </label>
                <input
                  id='profile-image'
                  type='file'
                  accept='image/*'
                  ref={inputRef}
                  onChange={() => uploadProfileImage()}
                  style={{ display: 'none' }}
                />
              </>
            ) : (
              <></>
            )}
            <img
              src={imgUrl ?? userImage}
              className={imgUrl ? imageStyle : defaultImageStyle}
              onClick={onUploadImageButtonClick}
            />
          </div>
          <div className={section1DataStyle}>
            <div className={userNameTextStyle}>{username}</div>
            <div className={section1NumericDataStyle}>
              <div className={section1NumberStyle}>
                {rank}
                <span className={section1UnitStyle}>위</span>
              </div>
              <svg height='10' width='10'>
                <circle
                  cx='5'
                  cy='5'
                  r='1'
                  stroke={themeColors.text[9]}
                  fill={themeColors.text[9]}
                />
              </svg>
              <div className={section1NumberStyle}>
                {formatNumber(score)} <span className={section1UnitStyle}>점</span>
              </div>
            </div>
          </div>
        </div>
        <div className={linkButtonListStyle}>
          {linkedinUrl && (
            <a className={linkButtonByDomainStyle.linkedin} href={linkedinUrl} role='button'>
              <img src={linkedinLogo} width='30px' height='30px' />
            </a>
          )}
          {githubUrl && (
            <a className={linkButtonByDomainStyle.github} href={githubUrl} role='button'>
              <img src={githubLogo} width='30px' height='30px' />
            </a>
          )}
        </div>
      </div>
      <Divider />
      <div className={section2Style}>
        <ProfileLabel name={'이메일'} value={email} />
        <ProfileLabel name={'전공'} value={major ? major : '선택 안 함'} />
        <ProfileLabel name={'직업'} value={job ? job : '선택 안 함'} />
        <ProfileLabel name={'희망직무'} value={jobObjective ? jobObjective : '선택 안 함'} />
        <ProfileLabel
          name={'주요 기술'}
          value={
            techs?.length === 1 && techs[0] === '' ? (
              '선택 안 함'
            ) : (
              <ul className={coreTechListStyle}>
                {techs?.map((e) => (
                  <TechTagBox name={e} key={e} />
                ))}
              </ul>
            )
          }
        />
      </div>

      <></>
      {!statistics.every((e) => isNaN(e.value)) ? (
        <>
          <Divider />
          <div className={section3Style}>
            <div className={labelTitleStyle}>통계</div>
            <div className={chartWrapperStyle}>
              <DoughnutChart data={createCategoryChartData(statistics)} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {isMine ? (
        <>
          <Divider />
          <RowBox className={editButtonListStyle}>
            <TextButton
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.LARGE_MEDIUM}
              className={editButtonStyle}
              onClick={() => {
                navigate(URL.USER_DATA_EDIT);
              }}
            >
              프로필 수정하기
            </TextButton>
            <TextButton
              theme={BUTTON_THEME.TERTIARY}
              size={BUTTON_SIZE.LARGE_MEDIUM}
              className={editButtonStyle}
              onClick={() => {
                navigate(URL.CHANGE_PASSWORD_WITH_LOGIN);
              }}
            >
              비밀번호 수정하기
            </TextButton>
          </RowBox>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
