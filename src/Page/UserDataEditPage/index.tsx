import { DefaultInputBox } from '../../Component/Box';
import { SearchDropdownInputBox } from '../../Component/Box/InputBox/SearchDropdownInputBox.tsx';
import { TextButton } from '../../Component/Button';
import { INPUT_TYPE } from '../../constants/input';
import { PageTemplate } from '../../Template';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import {
  formWrapperStyle,
  pageWrapperStyle,
  urlInputStyle,
  urlPrefixStyle,
  urlWrapperStyle,
} from './style.css';
import { CORE_TECH, JOB, JOB_OBJECTIVE } from '../../constants/userDataEdit';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createMajorList } from '../../utils/createMajorList';
import { IMajorListElement } from '../../types/api/major';
import { IDropdownElement } from '../../types/util';

const MAJOR_OPEN_API_KEY = '3da82601ae4e70ae3be5112a07bf35c5';
const MAJOR_OPEN_API_URL = 'https://www.career.go.kr/cnet/openapi/getOpenApi.json';

export const UserDataEditPage = () => {
  const getMajorList = (searchTitle?: string | null) => {
    return axios
      .get(MAJOR_OPEN_API_URL, {
        params: {
          apiKey: MAJOR_OPEN_API_KEY,
          svcType: 'api',
          svcCode: 'MAJOR',
          gubun: 'univ_list',
          contentType: 'json',
          perPage: 5,
          searchTitle: searchTitle,
        },
      })
      .then((res) => res.data.dataSearch.content);
  };

  const submit = () => {};
  const [majorSearchTitle, setMajorSearchTItle] = useState<string | null>(null);
  const { data: majorData } = useQuery<IMajorListElement[]>(['majors', majorSearchTitle], () =>
    getMajorList(majorSearchTitle),
  );
  const [majorList, setMajorList] = useState<IDropdownElement[]>([]);

  useEffect(() => {
    setMajorList(createMajorList(majorData));
  }, [majorData]);

  const isPasswordConfirmed = (password1: string, password2: string) => password1 === password2;

  return (
    <PageTemplate>
      <div className={pageWrapperStyle}>
        <h1>정보수정</h1>
        <form className={formWrapperStyle}>
          <label htmlFor='nickname'>닉네임</label>
          <DefaultInputBox id='nickname' name='nickname' placeholder='닉네임을 입력해주세요' />
          <label htmlFor='password'>비밀번호</label>
          <DefaultInputBox
            id='password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            type={INPUT_TYPE.PASSWORD}
          />
          <label htmlFor='password-confirm'>비밀번호 확인</label>
          <DefaultInputBox
            id='password-confirm'
            name='password-confirm'
            placeholder='비밀번호를 다시 한번 입력해주세요'
            type={INPUT_TYPE.PASSWORD}
          />
          <label htmlFor='major'>전공</label>
          <SearchDropdownInputBox id='major' elements={majorList} />
          <label htmlFor='job'>직업</label>
          <SearchDropdownInputBox id='job' elements={JOB} />
          <label htmlFor='core-tect'>주요 기술</label>
          <SearchDropdownInputBox id='core-tect' elements={CORE_TECH} />
          <label htmlFor='job-objective'>희망 직무</label>
          <SearchDropdownInputBox id='job-objective' elements={JOB_OBJECTIVE} />
          <label htmlFor='github-url'>Github</label>
          <div className={urlWrapperStyle}>
            <span className={urlPrefixStyle}>github.com/</span>
            <input className={urlInputStyle} id='github-url' />
          </div>
          <label htmlFor='linkedin-url'>Linkedin</label>
          <div className={urlWrapperStyle}>
            <span className={urlPrefixStyle}>linkedin.com/</span>
            <input className={urlInputStyle} id='linkedin-url' />
          </div>
          <TextButton
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.LARGE}
            type={BUTTON_TYPE.SUBMIT}
            onClick={submit}
          >
            수정
          </TextButton>
        </form>
      </div>
    </PageTemplate>
  );
};
