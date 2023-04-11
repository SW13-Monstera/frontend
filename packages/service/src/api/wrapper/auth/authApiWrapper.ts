import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { IChangePassword, IJoinRequest, ILoginRequest } from '../../../types/auth';
import { IUserInfo } from 'auth/types';
import { AUTHORIZTION, BEARER_TOKEN } from 'auth/constants';
import { getUserInfo, setUserInfo } from 'auth/utils/userInfo';
import { parseJwt } from 'auth/utils/parseJwt';

export const authApiWrapper = {
  login: (data: ILoginRequest) => {
    return apiClient.post(API_URL.LOGIN, data).then((res: { data: IUserInfo }) => {
      apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(res.data.accessToken);
      setUserInfo(res.data);
      return res.data;
    });
  },

  refresh: () => {
    const userInfo = getUserInfo();
    if (!userInfo) return;

    const result = parseJwt(userInfo.accessToken);
    if (!result) return;
    if (Date.now() < result.exp * 1000 - 20) return;

    return apiClient
      .get(API_URL.REFRESH, {
        headers: {
          Authorization: BEARER_TOKEN(userInfo.accessToken),
        },
      })
      .then((res: { data: { accessToken: string } }) => {
        const newAccessToken = res?.data?.accessToken;
        apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(newAccessToken);
        setUserInfo({ ...userInfo, accessToken: newAccessToken });
      });
  },

  join: (data: IJoinRequest) => {
    return apiClient.post(API_URL.JOIN, data);
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
