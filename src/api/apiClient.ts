import axios from 'axios';
import { AUTHORIZTION, BEARER_TOKEN } from '../constants/api';
import { URL } from '../constants/url';
import { getUserInfo } from '../utils/userInfo';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const userInfo = getUserInfo();
  if (userInfo) {
    config.headers![AUTHORIZTION] = BEARER_TOKEN(userInfo.accessToken);
  }
  return config;
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { status } = err.response;
    if (status === 404) {
      history.pushState({}, '', URL.PAGE_NOT_FOUND);
    }
  },
);

export default apiClient;
