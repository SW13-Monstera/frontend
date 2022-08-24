import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { AUTHORIZTION, BEARER_TOKEN } from '../../constants/api';
import { URL } from '../../constants/url';
import { useAuthStore, useUserDataStore } from '../../hooks/useStore';
import { setUserInfo } from '../../utils/userInfo';

const CallbackPage = () => {
  const { setIsLogin } = useAuthStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUserData } = useUserDataStore();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) return;
    authApiWrapper.getUserData(token).then((res) => {
      apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(token);
      setUserInfo({ ...res.data, accessToken: token });
      navigate(-1);
      setIsLogin(true);
      setUserData(res.data);
    });
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
