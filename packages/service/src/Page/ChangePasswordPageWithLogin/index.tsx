import { getUserInfo } from 'auth/utils/userInfo';
import { useNavigate } from 'react-router-dom';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { URLWithParam } from '../../constants/url';
import { PasswordForm } from '../../Organism/PasswordForm';
import { IUpdateUserRequest } from '../../types/api/user';
import { pageStyle, titleStyle } from './style.css';

export const ChangePasswordWithLoginPage = () => {
  const navigate = useNavigate();

  const submitNewPassword = () => {
    const originalPassword = (document.getElementById('original-password') as HTMLInputElement)
      .value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirm = (document.getElementById('password-confirm') as HTMLInputElement).value;

    if (!password || password !== passwordConfirm) return;

    const data: IUpdateUserRequest = {
      originalPassword,
      password,
    };
    userApiWrapper.updateUser(data).then(() => {
      const userInfo = getUserInfo();
      if (!userInfo) return;
      navigate(URLWithParam.PROFILE(userInfo.id));
    });
  };
  return (
    <>
      <div className={pageStyle}>
        <h2 className={titleStyle}>비밀번호 변경</h2>
        <PasswordForm submitNewPassword={submitNewPassword} isWithLogin />
      </div>
    </>
  );
};
