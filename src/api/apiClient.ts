import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => err,
);

export default apiClient;
