import { getUserInfo } from 'auth/utils/userInfo';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { DefaultInputBox } from '../../Component/Box';
import { TextButton } from '../../Component/Button';
import { INPUT_TYPE } from '../../constants/input';
import { URL } from '../../constants/url';
import { LockIcon } from '../../Icon/LockIcon';
import { themeColors } from '../../styles/theme.css';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { pageStyle, passwordFormStyle, titleStyle } from './style.css';

const PreviousPasswordPage = () => {
  const navigate = useNavigate();

  const checkPassword = async () => {
    const email = getUserInfo()?.email;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (!email || !password) return;
    const isPasswordCorrect = await authApiWrapper.login({ email, password });
    if (isPasswordCorrect) navigate(URL.CHANGE_PASSWORD_WITH_LOGIN);
    else toast.error('비밀번호를 확인해주세요');
  };
  return (
    <>
      <div className={pageStyle}>
        <form
          onSubmit={() => {
            checkPassword();
          }}
        >
          <div className={passwordFormStyle}>
            <h2 className={titleStyle}>비밀번호 변경</h2>

            <DefaultInputBox
              id='password'
              placeholder='현재 비밀번호를 입력해주세요'
              type={INPUT_TYPE.PASSWORD}
              name='password'
              label='비밀번호'
              icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
            />
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.LARGE}
            >
              확인
            </TextButton>
          </div>
        </form>
      </div>
    </>
  );
};
export default PreviousPasswordPage;
