import { DefaultInputBox } from '../../Component/Box';
import { SearchDropdownInputBox } from '../../Component/Box/InputBox/SearchDropdownInputBox.tsx';
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
import { JOB, JOB_OBJECTIVE } from '../../constants/userDataEdit';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createMajorList } from '../../utils/createMajorList';
import { IMajorListElement } from '../../types/api/major';
import { IDropdownElement } from '../../types/util';
import { MetaTag } from '../utils/MetaTag';
import { IProfileData, IUpdateUserRequest } from '../../types/api/user';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';

export const UserDataEditPage = () => {
  const navigate = useNavigate();
  const getMajorList = (searchTitle?: string | null) => {
    return axios
      .get(import.meta.env.VITE_MAJOR_OPEN_API_URL, {
        params: {
          apiKey: import.meta.env.VITE_MAJOR_OPEN_API_KEY,
          svcType: 'api',
          svcCode: 'MAJOR',
          gubun: 'univ_list',
          contentType: 'json',
          perPage: 7,
          searchTitle: searchTitle,
        },
      })
      .then((res) => res.data.dataSearch.content);
  };

  const getCoreTech = (searchTitle: string | null) => {
    return commonApiWrapper
      .getCoreTech(searchTitle === null ? '' : searchTitle)
      .then((res) => setCoreTech(res));
  };

  const { data: profileData } = useQuery<IProfileData>(
    'getUserInfoData',
    () => userApiWrapper.getUserInfoData(),
    { refetchOnWindowFocus: false },
  );
  const submitProfileData = () => {
    const data: IUpdateUserRequest = {
      username: (document.getElementById('username') as HTMLTextAreaElement).value ?? null,
      major: (document.querySelector('#major .tag') as HTMLDivElement)?.innerText ?? null,
      job: (document.querySelector('#job .tag') as HTMLDivElement)?.innerText ?? null,
      jobObjective:
        (document.querySelector('#job-objective .tag') as HTMLDivElement)?.innerText ?? null,
      techs: [],
      githubUrl:
        'https://www.github.com/' +
          (document.getElementById('github-url') as HTMLTextAreaElement).value ?? null,
      linkedinUrl:
        'https://www.linkedin.com/' +
          (document.getElementById('linkedin-url') as HTMLTextAreaElement).value ?? null,
      profileImgUrl: profileData?.profileImgUrl,
    };
    navigate(URL.MYPAGE);
    return userApiWrapper.updateUser(data);
  };

  const { mutate } = useMutation<IProfileData>(submitProfileData);
  const [majorSearchTitle, setMajorSearchTitle] = useState<string | null>(null);
  const [coreTechSearchTitle, setCoreTechSearchTitle] = useState<string | null>(null);

  const { data: majorData } = useQuery<IMajorListElement[]>(['majors', majorSearchTitle], () =>
    getMajorList(majorSearchTitle),
  );
  const { data: coreTechData } = useQuery<IMajorListElement[]>(
    ['coreTech', coreTechSearchTitle],
    () => getMajorList(majorSearchTitle),
  );
  const [majorList, setMajorList] = useState<IDropdownElement[]>([]);
  const [coreTech, setCoreTech] = useState<IDropdownElement[]>([]);

  const searchMajor = () => {
    const majorInputValue = (document.getElementById('major') as HTMLInputElement).value;
    setMajorSearchTitle(majorInputValue);
  };
  const searchCoreTech = () => {
    const coreTechInputValue = (document.getElementById('core-tech') as HTMLInputElement).value;
    setCoreTechSearchTitle(coreTechInputValue);
  };

  const reGithub = /https:\/\/www.github.com\/(.+)/;

  const reLinkedIn = /https:\/\/www.linkedin.com\/(.+)/;

  useEffect(() => {
    setMajorList(createMajorList(majorData));
  }, [majorData]);

  return (
    <PageTemplate>
      <MetaTag title='CS Broker - 정보 수정' />
      <div className={pageWrapperStyle}>
        <h1>정보수정</h1>
        <form className={formWrapperStyle}>
          <label htmlFor='username'>닉네임</label>
          <DefaultInputBox
            id='username'
            name='username'
            placeholder='닉네임을 입력해주세요'
            defaultValue={profileData?.username}
          />
          <label htmlFor='major'>전공 (최대 1개)</label>
          <SearchDropdownInputBox
            id='major'
            elements={majorList}
            searchWithAPI={searchMajor}
            defaultValue={profileData?.major}
          />
          <label htmlFor='job'>직업 (최대 1개)</label>
          <SearchDropdownInputBox id='job' elements={JOB} defaultValue={profileData?.job} />
          <label htmlFor='core-tect'>주요 기술 (최대 3개)</label>
          <SearchDropdownInputBox
            id='core-tect'
            searchWithAPI={searchCoreTech}
            elements={coreTech}
            defaultValue={profileData?.techs}
          />
          <label htmlFor='job-objective'>희망 직무 (최대 1개)</label>
          <SearchDropdownInputBox
            id='job-objective'
            elements={JOB_OBJECTIVE}
            defaultValue={profileData?.jobObjective}
          />
          <label htmlFor='github-url'>Github</label>
          <div className={urlWrapperStyle}>
            <span className={urlPrefixStyle}>github.com/</span>
            <input
              className={urlInputStyle}
              id='github-url'
              defaultValue={
                profileData?.githubUrl.match(reGithub)
                  ? profileData.githubUrl.split('https://www.github.com/')[1]
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
                profileData?.linkedinUrl.match(reLinkedIn)
                  ? profileData.linkedinUrl.split('https://www.linkedin.com/')[1]
                  : ''
              }
            />
          </div>
          <TextButton
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.LARGE}
            type={BUTTON_TYPE.BUTTON}
            onClick={() => {
              mutate();
            }}
          >
            수정
          </TextButton>
        </form>
      </div>
    </PageTemplate>
  );
};
