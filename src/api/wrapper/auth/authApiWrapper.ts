import { setUserInfo } from './../../../utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { IJoinRequest, ILoginRequest, IUserInfo } from '../../../types/auth';
import { AUTHORIZTION, BEARER_TOKEN } from '../../../constants/api';
import { getUserInfo } from '../../../utils/userInfo';
import { toast } from 'react-toastify';

export const authApiWrapper = {
  login: (data: ILoginRequest) => {
    return apiClient.post(API_URL.LOGIN, data).then(
      (res: { data: IUserInfo }) => {
        apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(res.data.accessToken);
        setUserInfo(res.data);
        return res.data;
      },
      (err) => {
        toast('로그인 실패');
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
          apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(newAccessToken);
          setUserInfo({ ...userInfo, accessToken: newAccessToken });
          return res.data.accessToken;
        },
        (err) => {
          return;
        },
      );
  },

  join: (data: IJoinRequest) => {
    apiClient.post(API_URL.JOIN, data).then(
      (res) => res,
      (err) => {
        toast('회원가입 실패');
        throw new Error('회원가입 실패');
      },
    );
  },

  getUserData: (token: string) => {
    return apiClient.get(API_URL.USER_INFO, {
      headers: {
        Authorization: BEARER_TOKEN(token),
      },
    });
  },
};
