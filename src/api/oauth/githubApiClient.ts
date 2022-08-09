import axios from 'axios';

const githubApiClient = axios.create({
  baseURL: 'https://github.com/login',
  withCredentials: true,
});

githubApiClient.interceptors.response.use(
  (res: { data: any }) => res.data,
  (err: any) => {
    const { status } = err.response;

    return Promise.reject(err);
  },
);

export default githubApiClient;
