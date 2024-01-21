import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { AUTHORIZATION, BEARER_TOKEN } from 'auth/constants';
import { URL } from '../../constants/url';
import { setUserInfo } from 'auth/utils/userInfo';

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) return;
    authApiWrapper.getUserData(token).then((res) => {
      apiClient.defaults.headers.common[AUTHORIZATION] = BEARER_TOKEN(token);
      setUserInfo({ ...res.data, accessToken: token });
      navigate(URL.MAIN);
    });
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
