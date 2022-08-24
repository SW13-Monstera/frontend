import axios from 'axios';
import { parseJwt } from '../utils/parseJwt';
import { getUserInfo } from '../utils/userInfo';
import { authApiWrapper } from './wrapper/auth/authApiWrapper';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
});

// apiClient.interceptors.request.use(
//   (res) => {
//     const userInfo = getUserInfo();
//     if (userInfo) {
//       const { exp } = parseJwt(userInfo.accessToken);
//       if (Date.now() >= exp * 1000) {
//         authApiWrapper.refresh();
//       }
//     }
//   },
//   (err) => {
//     const { status } = err.response;

//     if (status === 401) {
//       // authApiWrapper.refresh();
//     } else if (status === 400 || status === 500) {
//       //   location.reload();
//     } else if (status !== 200) {
//       //   window.location.replace('/');
//     }
//     return Promise.reject(err);
//   },
// );

apiClient.interceptors.response.use(
  (res) => {
    const userInfo = getUserInfo();
    if (userInfo) {
      const { exp } = parseJwt(userInfo.accessToken);
      if (Date.now() >= exp * 1000) {
        authApiWrapper.refresh();
      }
    }
    return res.data;
  },
  (err) => {
    const { status } = err.response;

    if (status === 401) {
      // authApiWrapper.refresh();
    } else if (status === 400 || status === 500) {
      //   location.reload();
    } else if (status !== 200) {
      //   window.location.replace('/');
    }
    return Promise.reject(err);
  },
);

export default apiClient;
