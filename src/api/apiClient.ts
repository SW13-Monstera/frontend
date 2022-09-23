import { AUTHORIZTION, BEARER_TOKEN } from './../constants/api';
import axios from 'axios';
import { parseJwt } from '../utils/parseJwt';
import { getUserInfo } from '../utils/userInfo';
import { authApiWrapper } from './wrapper/auth/authApiWrapper';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const userInfo = getUserInfo();
    if (userInfo) {
      config.headers[AUTHORIZTION] = BEARER_TOKEN(userInfo.accessToken);
    }
    return config
  }
)

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { config, status } = err.response;

    const originalRequest = config;

    if (status === 401) {
      const userInfo = getUserInfo();
      if (userInfo) {
        const { exp } = parseJwt(userInfo.accessToken);
        if (Date.now() >= exp * 1000) {
          authApiWrapper.refresh()?.then((newAccessToken) => {
            originalRequest.headers[AUTHORIZTION] = BEARER_TOKEN(newAccessToken);
            return apiClient(originalRequest);
          });
        }
      }
    } else if (status === 400 || status === 500) {
      //   location.reload();
    } else if (status !== 200) {
      //   window.location.replace('/');
    }
    return Promise.reject(err);
  },
);

export default apiClient;
