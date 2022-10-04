import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IProfileData, IUpdateUserRequest } from '../../../types/api/user';
import { BEARER_TOKEN } from '../../../constants/api';
import { getUserInfo, setUserInfo } from '../../../utils/userInfo';
import { toast } from 'react-toastify';

export const userApiWrapper = {
  updateUser: (data: IUpdateUserRequest) => {
    const userInfo = getUserInfo();
    if (!userInfo) throw new Error('invalid id');

    return apiClient
      .put(API_URL_WITH_PARAMS.UPDATE_USER(userInfo.id), data)
      .then((res: { data: IProfileData }) => {
        setUserInfo({
          ...userInfo,
          username: res.data.username,
        });
        return res.data;
      });
  },

  getStats: () => {
    const userInfo = getUserInfo();
    if (!userInfo) {
      toast('통계 조회 실패');
      throw new Error('통계 조회 실패');
    }

    return apiClient
      .get(API_URL_WITH_PARAMS.USER_STATS(userInfo.id), {
        headers: { Authorization: BEARER_TOKEN(userInfo.accessToken) },
      })
      .then(
        (res) => res.data,
        (err) => {
          toast('통계 조회 실패');
          throw new Error('통계 조회 실패');
        },
      );
  },

  getUserInfoData: () => {
    const userInfo = getUserInfo();

    if (!userInfo) {
      toast('유저 조회 실패');
      throw new Error('유저 조회 실패');
    }

    return apiClient
      .get(API_URL_WITH_PARAMS.USER_INFO(userInfo.id), {
        headers: { Authorization: BEARER_TOKEN(userInfo.accessToken) },
      })
      .then(
        (res) => res.data,
        (err) => {
          toast('유저 조회 실패');
          throw new Error('유저 조회 실패');
        },
      );
  },

  sendChangePasswordEmail: (email: string) => {
    return apiClient.post(API_URL.SEND_CHANGE_PASSWORD_EMAIL, email);
  },

  changePassword: () => {
    apiClient.put(API_URL.CHANGE_PASSWORD);
  },
};
