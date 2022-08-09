import axios from 'axios';
import { authApiWrapper } from './wrapper/auth/authApiWrapper';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

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
