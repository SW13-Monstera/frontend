import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { PageTemplate } from '../../Template';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import {
  formWrapperStyle,
  pageWrapperStyle,
  urlInputStyle,
  urlPrefixStyle,
  urlWrapperStyle,
} from './style.css';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { IProfileData, IUpdateUserRequest } from '../../types/api/user';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { reGithub, reLinkedIn } from '../../utils/regex';

export const UserDataEditPage = () => {
  const navigate = useNavigate();
  const { data: profileData } = useQuery<IProfileData>(
    'getUserInfoData',
    () => userApiWrapper.getUserInfoData(),
    { refetchOnWindowFocus: false },
  );

  const submitProfileData = () => {
    const data: IUpdateUserRequest = {
      username: (document.getElementById('username') as HTMLTextAreaElement).value ?? null,
      githubUrl:
        'https://www.github.com/' +
          (document.getElementById('github-url') as HTMLTextAreaElement).value ?? null,
      linkedinUrl:
        'https://www.linkedin.com/' +
          (document.getElementById('linkedin-url') as HTMLTextAreaElement).value ?? null,
      profileImgUrl: profileData?.profileImgUrl,
    };
    userApiWrapper.updateUser(data);
    navigate(URL.MYPAGE);
  };

  return (
    <PageTemplate>
      <MetaTag title='CS Broker - 정보 수정' />
      <div className={pageWrapperStyle}>
        <h1>정보수정</h1>
        <form className={formWrapperStyle}>
          <DefaultInputBox
            id='username'
            name='username'
            placeholder='닉네임을 입력해주세요'
            defaultValue={profileData?.username}
            label='닉네임'
          />
          <label htmlFor='github-url'>Github</label>
          <div className={urlWrapperStyle}>
            <span className={urlPrefixStyle}>github.com/</span>
            <input
              className={urlInputStyle}
              id='github-url'
              defaultValue={
                profileData?.githubUrl
                  ? profileData?.githubUrl.match(reGithub)
                    ? profileData.githubUrl.split('https://www.github.com/')[1]
                    : ''
                  : ''
              }
            />
          </div>
          <label htmlFor='linkedin-url'>Linkedin</label>
          <div className={urlWrapperStyle}>
            <span className={urlPrefixStyle}>linkedin.com/</span>
            <input
              className={urlInputStyle}
              id='linkedin-url'
              defaultValue={
                profileData?.linkedinUrl
                  ? profileData?.linkedinUrl.match(reLinkedIn)
                    ? profileData.linkedinUrl.split('https://www.linkedin.com/')[1]
                    : ''
                  : ''
              }
            />
          </div>
          <TextButton
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.LARGE}
            type={BUTTON_TYPE.BUTTON}
            onClick={() => {
              submitProfileData();
            }}
          >
            수정
          </TextButton>
        </form>
      </div>
    </PageTemplate>
  );
};
