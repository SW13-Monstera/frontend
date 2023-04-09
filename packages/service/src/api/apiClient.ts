import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL, AUTHORIZTION, BEARER_TOKEN } from '../constants/api';
import { getUserInfo } from '../utils/userInfo';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
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
    if (status >= 500) {
      toast.error('앗! 오류가 발생했어요🥲' + '\n' + '잠시 후에 다시 시도해보세요.');
    }
  },
);

export default apiClient;