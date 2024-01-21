import { IUserInfo } from 'auth/types';
import { setLogout } from './../../../utils/index';
import { getUserInfo, setUserInfo } from 'auth/utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { AUTHORIZATION, BEARER_TOKEN, ROLES } from 'auth/constants';

interface ILoginRequest {
  email: string;
  password: string;
}

export const authApiWrapper = {
  login: (data: ILoginRequest) => {
    return apiClient.post(API_URL.LOGIN, data).then(
      (res: { data: IUserInfo }) => {
        if (res.data.role !== ROLES.ROLE_ADMIN) {
          alert('권한 없음');
          throw new Error('권한 없음');
        }
        apiClient.defaults.headers.common[AUTHORIZATION] = BEARER_TOKEN(res.data.accessToken);
        return res.data;
      },
      (err) => {
        alert('로그인 실패');
        throw new Error('로그인 실패');
      },
    );
  },
  refresh: () => {
    const userInfo = getUserInfo();
    if (!userInfo) return;

    return apiClient
      .get(API_URL.REFRESH, {
        headers: {
          Authorization: BEARER_TOKEN(userInfo.accessToken),
        },
      })
      .then(
        (res: { data: { accessToken: string } }) => {
          const newAccessToken = res.data.accessToken;
          apiClient.defaults.headers.common[AUTHORIZATION] = BEARER_TOKEN(newAccessToken);
          setUserInfo({ ...userInfo, accessToken: newAccessToken });
          return res.data.accessToken;
        },
        (err) => {
          setLogout();
          alert('다시 로그인 해주세요.');
          setTimeout(() => {
            location.reload();
          }, 1000);
          return err;
        },
      );
  },
};
