import axios from 'axios';
import { getUserInfo } from 'auth/utils/userInfo';
import { parseJwt } from 'auth/utils/parseJwt';
import { AUTHORIZATION, BEARER_TOKEN } from 'auth/constants';
import { authApiWrapper } from './wrapper/auth/authApiWrapper';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

const userInfo = getUserInfo();
if (userInfo) {
  const token: string | null | undefined = userInfo.accessToken;
  if (typeof token === 'string') {
    apiClient.defaults.headers.common[AUTHORIZATION] = BEARER_TOKEN(token);
  }
}

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { config, status } = err.response;
    const originalRequest = config;

    if (status === 401) {
      const userInfo = getUserInfo();

      if (userInfo) {
        const jwt = parseJwt(userInfo.accessToken);
        if (jwt?.exp && Date.now() >= jwt.exp * 1000) {
          authApiWrapper.refresh()?.then((newAccessToken) => {
            originalRequest.headers[AUTHORIZATION] = BEARER_TOKEN(newAccessToken);
            return apiClient(originalRequest);
          });
        }
      }
    }
    return Promise.reject(err);
  },
);

export default apiClient;
