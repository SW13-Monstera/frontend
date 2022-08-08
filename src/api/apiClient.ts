import axios from 'axios';
import { authApiWrapper } from './wrapper/auth/authApiWrapper';

const apiClient = axios.create({
  baseURL: 'https://dev.api.csbroker.io/api',
  withCredentials: true,
});

// isLogin? -> localstorage userInfo check -> 아래 로직 세팅
try {
  const userInfoString = localStorage.getItem('userInfo');
  if (userInfoString !== null) {
    const userInfo = JSON.parse(userInfoString);
    const token: string | null | undefined = userInfo.accessToken;
    if (typeof token === 'string') {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
} catch (e) {
  ('');
}

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { status } = err.response;

    if (status === 401) {
      authApiWrapper.refresh();
    } else if (status === 400 || status === 500) {
      //   location.reload();
    } else if (status !== 200) {
      //   window.location.replace('/');
    }
    return Promise.reject(err);
  },
);

export default apiClient;
