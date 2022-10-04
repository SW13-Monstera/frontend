import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { INPUT_TYPE } from '../../constants/input';
import { URL } from '../../constants/url';
import { PageTemplate } from '../../Template';
import { IChangePassword } from '../../types/auth';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { pageStyle, titleStyle } from './style.css';

export const ChangePasswordPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [isPasswordSame, setIsPasswordSame] = useState(false);

  const configureIsPasswordSame = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirmValue = (document.getElementById('password-confirm') as HTMLInputElement)
      .value;
    if (!passwordValue) return;
    setIsPasswordSame(passwordValue === passwordConfirmValue);
  };

  const submitNewPassword = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirmValue = (document.getElementById('password-confirm') as HTMLInputElement)
      .value;
    if (passwordValue !== passwordConfirmValue) return;
    if (!code || !passwordValue) return;
    const data: IChangePassword = {
      code: code,
      password: passwordValue,
    };
    authApiWrapper.changePassword(data);
    navigate(URL.MAIN);
  };
  return (
    <PageTemplate>
      <div className={pageStyle}>
        <div className={titleStyle}>
          <p>비밀번호 변경</p>
        </div>
        <label htmlFor='password'>비밀번호</label>
        <DefaultInputBox
          id='password'
          placeholder='비밀번호를 입력해주세요'
          type={INPUT_TYPE.PASSWORD}
          name='password'
          onChange={configureIsPasswordSame}
        />
        <label htmlFor='password-confirm'>비밀번호 확인</label>
        <DefaultInputBox
          id='password-confirm'
          placeholder='비밀번호를 다시 한번 입력해주세요'
          type={INPUT_TYPE.PASSWORD}
          name='password-confirm'
          onChange={configureIsPasswordSame}
          isWarning={!isPasswordSame}
          warningMessage='비밀번호가 일치하지 않습니다.'
        />
        <TextButton
          type={BUTTON_TYPE.SUBMIT}
          theme={BUTTON_THEME.PRIMARY}
          size={BUTTON_SIZE.LARGE}
          onClick={submitNewPassword}
          isActivated={isPasswordSame}
        >
          확인
        </TextButton>
      </div>
    </PageTemplate>
  );
};
