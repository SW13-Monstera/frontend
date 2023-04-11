import { useNavigate } from 'react-router-dom';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { URL } from '../../constants/url';
import { PasswordForm } from '../../Organism/PasswordForm';
import { IUpdateUserRequest } from '../../types/api/user';
import { pageStyle, titleStyle } from './style.css';

export const ChangePasswordWithLoginPage = () => {
  const navigate = useNavigate();

  const submitNewPassword = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirmValue = (document.getElementById('password-confirm') as HTMLInputElement)
      .value;
    if (passwordValue !== passwordConfirmValue) return;
    if (!passwordValue) return;
    const data: IUpdateUserRequest = {
      password: passwordValue,
    };
    userApiWrapper.updateUser(data);
    navigate(URL.MAIN);
  };
  return (
    <>
      <div className={pageStyle}>
        <h2 className={titleStyle}>비밀번호 변경</h2>
        <PasswordForm submitNewPassword={submitNewPassword} />
      </div>
    </>
  );
};
