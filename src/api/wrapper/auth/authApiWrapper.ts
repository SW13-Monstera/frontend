import { setUserInfo } from './../../../utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { IChangePassword, IJoinRequest, ILoginRequest, IUserInfo } from '../../../types/auth';
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
          if (res && res.data && res.data.accessToken) {
            const newAccessToken = res.data.accessToken;
            apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(newAccessToken);
            setUserInfo({ ...userInfo, accessToken: newAccessToken });
          }
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
  sendChangePasswordEmail: (email: string) => {
    return apiClient.post(API_URL.SEND_CHANGE_PASSWORD_EMAIL, { email: email });
  },

  changePassword: (data: IChangePassword) => {
    apiClient.put(API_URL.CHANGE_PASSWORD, data);
  },
};
