import axios from 'axios';
import { AUTHORIZTION, BEARER_TOKEN } from '../constants/api';
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
  (err) => err,
);

export default apiClient;
