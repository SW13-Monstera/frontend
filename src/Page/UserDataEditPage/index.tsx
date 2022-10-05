import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { PageTemplate } from '../../Template';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { formWrapperStyle, pageWrapperStyle } from './style.css';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { IProfileData, IUpdateUserRequest } from '../../types/api/user';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { reGithub, reLinkedIn } from '../../utils/regex';
import { UrlInputBox } from '../../Component/Box/InputBox/UrlInputBox';
import { DefaultSelect } from '../../Component/Utils/DefaultSelect';

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
          <DefaultSelect label='전공' options={[]} defaultValue={[]} />
          <UrlInputBox
            id='github-url'
            label='Github'
            value={profileData?.githubUrl ?? ''}
            prefix='github.com/'
            regex={reGithub}
          />
          <UrlInputBox
            id='linkedin-url'
            label='Linkedin'
            value={profileData?.linkedinUrl ?? ''}
            prefix='linkedin.com/'
            regex={reLinkedIn}
          />
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
