import { useState } from 'react';
import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { INPUT_TYPE } from '../../constants/input';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { passwordFormStyle } from './style.css';

interface IPasswordForm {
  submitNewPassword: (newpassword: string) => void;
}

export const PasswordForm = ({ submitNewPassword }: IPasswordForm) => {
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [isActivated, setIsActivated] = useState(false);

  const configureIsPasswordSame = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirmValue = (document.getElementById('password-confirm') as HTMLInputElement)
      .value;
    if (!passwordValue) return;
    setIsPasswordSame(passwordValue === passwordConfirmValue);
    setIsActivated(passwordValue === passwordConfirmValue);
  };

  const submit = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    submitNewPassword(passwordValue);
  };

  return (
    <div className={passwordFormStyle}>
      <DefaultInputBox
        id='password'
        placeholder='비밀번호를 입력해주세요'
        type={INPUT_TYPE.PASSWORD}
        name='password'
        label='비밀번호'
        onChange={configureIsPasswordSame}
      />
      <DefaultInputBox
        id='password-confirm'
        placeholder='비밀번호를 다시 한번 입력해주세요'
        type={INPUT_TYPE.PASSWORD}
        name='password-confirm'
        label='비밀번호 확인'
        onChange={configureIsPasswordSame}
        isWarning={!isPasswordSame}
        warningMessage='비밀번호가 일치하지 않습니다.'
      />
      <TextButton
        type={BUTTON_TYPE.SUBMIT}
        theme={BUTTON_THEME.PRIMARY}
        size={BUTTON_SIZE.LARGE}
        onClick={submit}
        isActivated={isActivated}
      >
        확인
      </TextButton>
    </div>
  );
};
