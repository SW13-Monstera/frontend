import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { formWrapperStyle, pageTitleStyle, pageWrapperStyle } from './style.css';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { IProfileData } from '../../types/api/user';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { useNavigate } from 'react-router-dom';
import { URLWithParam } from '../../constants/url';
import { reGithub, reLinkedIn } from '../../utils/regex';
import { UrlInputBox } from '../../Component/Box/InputBox/UrlInputBox';
import { DefaultSelect } from '../../Component/Utils/DefaultSelect';
import { JOB, JOB_OBJECTIVE } from '../../constants/userDataEdit';
import { IOption } from '../../types/select';
import { useState } from 'react';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { createOptions } from '../../utils/createOptions';
import { debounce } from '../../utils/debounce';
import { SmileIcon } from '../../Icon/SmileIcon';
import { themeColors } from '../../styles/theme.css';
import { getUserInfo } from 'auth/utils/userInfo';

export const UserDataEditPage = () => {
  const myUserInfo = getUserInfo();
  if (!myUserInfo) return <></>;
  const navigate = useNavigate();
  const { data: profileData } = useQuery<IProfileData>('getUserInfoData', () =>
    userApiWrapper.getUserInfoData(myUserInfo.id),
  );

  const loadMajorOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
    debounce(
      (inputValue: string) => {
        commonApiWrapper.getMajor(inputValue).then((e) => {
          callback(createOptions(e));
        });
      },
      inputValue,
      500,
    );
  };

  const loadTechOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
    debounce(
      (inputValue: string) => {
        commonApiWrapper.getCoreTech(inputValue).then((e) => {
          callback(createOptions(e));
        });
      },
      inputValue,
      500,
    );
  };

  const loadJobOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
    callback(JOB.filter((e) => e.label.includes(inputValue)));
  };

  const loadJobObjectiveOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
    callback(JOB_OBJECTIVE.filter((e) => e.label.includes(inputValue)));
  };

  const [newProfileData, setNewProfileData] = useState<Partial<IProfileData>>();

  const submitProfileData = () => {
    userApiWrapper
      .updateUser({
        ...newProfileData,
        username: (document.getElementById('username') as HTMLTextAreaElement).value ?? null,
        githubUrl:
          'https://www.github.com/' +
            (document.getElementById('github-url') as HTMLTextAreaElement).value ?? null,
        linkedinUrl:
          'https://www.linkedin.com/' +
            (document.getElementById('linkedin-url') as HTMLTextAreaElement).value ?? null,
        profileImgUrl: profileData?.profileImgUrl,
      })
      .then(() => {
        const userInfo = getUserInfo();
        if (!userInfo) return;
        navigate(URLWithParam.PROFILE(userInfo.id));
      });
  };

  return (
    <>
      <MetaTag title='CS Broker - 정보 수정' />
      {profileData && (
        <div className={pageWrapperStyle}>
          <h1 className={pageTitleStyle}>정보수정</h1>
          <form className={formWrapperStyle}>
            <DefaultInputBox
              id='username'
              name='username'
              placeholder='닉네임을 입력해주세요'
              defaultValue={profileData?.username}
              label='닉네임'
              icon={<SmileIcon width='1.25rem' height='1.25rem' fill={themeColors.text[3]} />}
            />
            <DefaultSelect
              label='전공'
              loadOptions={loadMajorOptions}
              defaultValue={createOptions(profileData?.major ? [profileData.major] : [])}
              onChange={(majorOption: IOption) => {
                setNewProfileData((prev) => {
                  return { ...prev, major: majorOption.label };
                });
              }}
            />
            <DefaultSelect
              label='직업'
              isAsync={false}
              options={JOB}
              loadOptions={loadJobOptions}
              defaultValue={JOB.find((e) => e.label === profileData?.job)}
              onChange={(jobOption: IOption) => {
                setNewProfileData((prev) => {
                  return { ...prev, job: jobOption.label };
                });
              }}
            />
            <DefaultSelect
              label='주요기술(최대 3개)'
              loadOptions={loadTechOptions}
              isMulti={true}
              defaultValue={createOptions(profileData?.techs ? profileData.techs : [])}
              onChange={(techOptions: IOption[]) => {
                setNewProfileData((prev) => {
                  return { ...prev, techs: techOptions.map((e) => e.label) };
                });
              }}
            />
            <DefaultSelect
              label='희망 직무'
              isAsync={false}
              options={JOB_OBJECTIVE}
              loadOptions={loadJobObjectiveOptions}
              defaultValue={JOB_OBJECTIVE.find((e) => e.label === profileData?.jobObjective)}
              onChange={(jobOption: IOption) => {
                setNewProfileData((prev) => {
                  return { ...prev, jobObjective: jobOption.label };
                });
              }}
            />
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
              수정하기
            </TextButton>
          </form>
        </div>
      )}
    </>
  );
};
