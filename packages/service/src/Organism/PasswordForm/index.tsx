import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { INPUT_TYPE } from '../../constants/input';
import { usePasswordConfirm } from '../../hooks/usePasswordConfirm';
import { LockIcon } from '../../Icon/LockIcon';
import { themeColors } from '../../styles/theme.css';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { passwordFormStyle } from './style.css';

interface IPasswordForm {
  submitNewPassword: (newpassword: string) => void;
  isWithLogin?: boolean;
}

export const PasswordForm = ({ submitNewPassword, isWithLogin = false }: IPasswordForm) => {
  const { passwordValue, setPasswordValue, setPasswordConfirmValue, isPasswordSame } =
    usePasswordConfirm();

  return (
    <div className={passwordFormStyle}>
      {isWithLogin && (
        <DefaultInputBox
          id='original-password'
          placeholder='현재 비밀번호를 입력해주세요'
          type={INPUT_TYPE.PASSWORD}
          name='original-password'
          label='현재 비밀번호'
          icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
        />
      )}
      <DefaultInputBox
        id='password'
        placeholder='비밀번호를 입력해주세요'
        type={INPUT_TYPE.PASSWORD}
        name='password'
        label='비밀번호'
        onChange={(event) => {
          setPasswordValue(event.target.value);
        }}
        icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
      />
      <DefaultInputBox
        id='password-confirm'
        placeholder='비밀번호를 다시 한번 입력해주세요'
        type={INPUT_TYPE.PASSWORD}
        name='password-confirm'
        label='비밀번호 확인'
        onChange={(event) => {
          setPasswordConfirmValue(event.target.value);
        }}
        isWarning={!isPasswordSame}
        warningMessages={[{ text: '비밀번호가 일치하지 않습니다.', isWarning: false }]}
        icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
      />
      <TextButton
        type={BUTTON_TYPE.SUBMIT}
        theme={BUTTON_THEME.PRIMARY}
        size={BUTTON_SIZE.LARGE}
        onClick={() => submitNewPassword(passwordValue)}
        isActivated={isPasswordSame}
      >
        확인
      </TextButton>
    </div>
  );
};
