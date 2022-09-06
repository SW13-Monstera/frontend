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
import { WarningMessage } from '../../Component/Message/WarningMessage';
import { isPasswordConfirmed } from '../../utils/isPasswordConfirmed';

export const UserDataEditPage = () => {
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

  const submit = () => {
    return;
  };
  const [majorSearchTitle, setMajorSearchTitle] = useState<string | null>(null);
  const { data: majorData } = useQuery<IMajorListElement[]>(['majors', majorSearchTitle], () =>
    getMajorList(majorSearchTitle),
  );
  const [majorList, setMajorList] = useState<IDropdownElement[]>([]);
  const [isPasswordConfirmWarningShown, setIsPasswordConfirmWarningShown] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const searchMajor = () => {
    const majorInputValue = (document.getElementById('major') as HTMLInputElement).value;
    setMajorSearchTitle(majorInputValue);
  };

  const confirmPassword = () => {
    const password = (document.getElementById('password') as HTMLInputElement)?.value;
    const passwordConfirm = (document.getElementById('password-confirm') as HTMLInputElement)
      ?.value;
    if (passwordConfirm) {
      const result = isPasswordConfirmed(password, passwordConfirm);
      setIsPasswordConfirmWarningShown(!result);
      setIsFormValid(result);
    }
  };

  useEffect(() => {
    setMajorList(createMajorList(majorData));
  }, [majorData]);

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
            onChange={confirmPassword}
          />
          <WarningMessage isShown={isPasswordConfirmWarningShown}>
            비밀번호가 일치하지 않습니다.
          </WarningMessage>
          <label htmlFor='major'>전공</label>
          <SearchDropdownInputBox id='major' elements={majorList} searchWithAPI={searchMajor} />
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
            isActivated={isFormValid}
          >
            수정
          </TextButton>
        </form>
      </div>
    </PageTemplate>
  );
};
