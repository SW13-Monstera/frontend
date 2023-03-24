import { INVALID_ID_ERROR } from './../../../errors/index';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IProfileData, IUpdateUserRequest } from '../../../types/api/user';
import { getUserInfo, setUserInfo } from '../../../utils/userInfo';
import { toast } from 'react-toastify';

export const userApiWrapper = {
  updateUser: (data: IUpdateUserRequest) => {
    const userInfo = getUserInfo();
    if (!userInfo) throw INVALID_ID_ERROR;

    return apiClient
      .put(API_URL_WITH_PARAMS.UPDATE_USER(userInfo.id), data)
      .then((res: { data: IProfileData }) => {
        setUserInfo({
          ...userInfo,
          username: res.data.username ?? '',
        });
        return res.data;
      });
  },

  getStats: (userId: string) => {
    if (!userId) {
      toast('통계 조회 실패');
      throw new Error('통계 조회 실패');
    }

    return apiClient.get(API_URL_WITH_PARAMS.USER_STATS(userId)).then(
      (res) => res.data,
      (err) => {
        toast('통계 조회 실패');
        throw new Error('통계 조회 실패');
      },
    );
  },

  getUserInfoData: (userId: string) => {
    if (!userId) {
      toast('유저 조회 실패');
      throw new Error('유저 조회 실패');
    }

    return apiClient.get(API_URL_WITH_PARAMS.USER_INFO(userId)).then(
      (res) => res.data,
      (err) => {
        toast('유저 조회 실패');
        throw new Error('유저 조회 실패');
      },
    );
  },
  getNotifications: (page: number) => {
    return apiClient.get(API_URL.NOTIFICATIONS, { params: { page } }).then((res) => res.data);
  },
  readNotification: (notificationId: string) => {
    return apiClient
      .put(API_URL_WITH_PARAMS.READ_NOTIFICATION(notificationId))
      .then((res) => res.data);
  },
};
