import apiClient from '../../apiClient';
import { API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IUpdateUserRequest } from '../../../types/api/user';
import { BEARER_TOKEN } from '../../../constants/api';
import { getUserInfo, setUserInfo } from '../../../utils/userInfo';

export const userApiWrapper = {
  updateUser: (data: IUpdateUserRequest) => {
    const userInfo = getUserInfo();
    if (!userInfo) return;
    apiClient
      .put(API_URL_WITH_PARAMS.UPDATE_USER(userInfo.id), data, {
        headers: { Authorization: BEARER_TOKEN(userInfo.accessToken) },
      })
      .then((res) => {
        setUserInfo({ ...res.data, accessToken: userInfo.accessToken });
      });
  },
};
